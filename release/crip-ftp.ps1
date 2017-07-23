<#     HELPERS #>
function Create-FtpDirectory {
  param(
    [Parameter(Mandatory=$true)] [string] $sourceuri,
    [Parameter(Mandatory=$true)] [string] $folder,
    [Parameter(Mandatory=$true)] [string] $username,
    [Parameter(Mandatory=$true)] [string] $password
  )
  "Creating FTP directory '${folder}'"
  $newFolder = "${sourceuri}/${folder}";
  try {
      $ftprequest = [System.Net.WebRequest]::Create($newFolder);
      $ftprequest.Credentials = New-Object System.Net.NetworkCredential($username, $password)
      $ftprequest.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory

      $response = $ftprequest.GetResponse();
      "Folder created, status: " + $response.StatusDescription
      $response.Close();
  } catch [Net.WebException] {
    try {
        $ftprequest = [System.Net.WebRequest]::Create($newFolder);
		$ftprequest.Credentials = New-Object System.Net.NetworkCredential($username,$password);
		$ftprequest.Method = [System.Net.WebRequestMethods+FTP]::PrintWorkingDirectory;
		
        $response = $ftprequest.GetResponse();
        "Folder already exists (${folder})"
        $response.Close();
    } catch [Net.WebException] {
        "Error while create directory '${folder}'"
    }
  }
}

function NewWebClient {
  param(
    [Parameter(Mandatory=$true)] [string] $username,
    [Parameter(Mandatory=$true)] [string] $password
  )
  $webclient = New-Object System.Net.WebClient
  $webclient.Credentials = New-Object System.Net.NetworkCredential($username, $password)
  return $webclient
}

function Upload-FtpFiles {
  param(
    [Parameter(Mandatory=$true)] [System.Net.WebClient] $webclient,
    [Parameter(Mandatory=$true)] [string] $dir,
    [Parameter(Mandatory=$true)] [string] $sourceuri,
    [Parameter(Mandatory=$true)] [string] $folder
  )
   
    "Start uploading $dir"

    foreach($item in (Get-ChildItem $dir -File)) {
        "Uploading /${item}..."
        $uri = New-Object System.Uri("$sourceuri/$folder/" + $item.Name)
        $webclient.UploadFile($uri, $item.FullName)
        "Uploaded /$folder/" + $item.Name
    }
}
<# END HELPERS #>

#we specify the directory where all files that we want to upload  
$scriptPath = $PSScriptRoot;
$Dir = (get-item $scriptPath ).parent.FullName;

#build
Set-Location -Path $Dir
Invoke-Expression "npm run build" 
Set-Location -Path $scriptPath


#ftp server
$ftp = "ftp://ftp.crip.lv"
$user = "u386704066"
$pass = Get-Content "${PSScriptRoot}/password"

$webclient = NewWebClient $user $pass

Upload-FtpFiles $webclient "$dir/*.html" $ftp 'finalsurge'

Create-FtpDirectory $ftp 'finalsurge/dist' $user $pass
Upload-FtpFiles $webclient "$dir/dist/*" $ftp 'finalsurge/dist'

Create-FtpDirectory $ftp 'finalsurge/dist/coach' $user $pass
Upload-FtpFiles $webclient "$dir/dist/coach/*" $ftp 'finalsurge/dist/coach'

Create-FtpDirectory $ftp 'finalsurge/dist/app-screens' $user $pass
Upload-FtpFiles $webclient "$dir/dist/app-screens/*" $ftp 'finalsurge/dist/app-screens'
