#we specify the directory where all files that we want to upload  
$scriptPath = $PSScriptRoot;
$Dir = (get-item $scriptPath ).parent.FullName;

#build
Set-Location -Path $Dir
Invoke-Expression "npm run build" 
Set-Location -Path $scriptPath

#ftp server
$ftp = "ftp://ftp.crip.lv/finalsurge/"
$user = "u386704066"
$pass = Get-Content "${PSScriptRoot}/password"

$webclient = New-Object System.Net.WebClient

$webclient.Credentials = New-Object System.Net.NetworkCredential($user,$pass)

"Uploading /*.html"

foreach($item in (dir "${Dir}/" "*.html")) {
    " $item..."
    $uri = New-Object System.Uri($ftp+$item.Name)
    $webclient.UploadFile($uri, $item.FullName)
}

"Uploading /dir/*"

foreach($item in (dir "${Dir}/dist/" "*.*")){
    "Uploading /dir/ $item..."
    $uri = New-Object System.Uri($ftp+'dist/'+$item.Name)
    $webclient.UploadFile($uri, $item.FullName)
}