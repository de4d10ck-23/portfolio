Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

$inWord = $false
$wordStart = 0
for ($x = 45; $x -le 750; $x++) {
    $c = $bmp.GetPixel($x, 59)
    $isText = ($c.R -gt 100)
    if ($isText -and -not $inWord) {
        $inWord = $true
        $wordStart = $x
    } elseif (-not $isText -and $inWord) {
        $inWord = $false
        if (($x - $wordStart) -gt 3) {
            $colIndex = [Math]::Round(($wordStart - 57.5) / 13)
            Write-Output "Month label around X=$wordStart -> Col $colIndex"
        }
    }
}
$bmp.Dispose()
