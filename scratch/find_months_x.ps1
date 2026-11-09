Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

# Text row is around Y = 50..58
# Let's inspect where pixels are bright (R > 100) along Y=53
Write-Output "Scanning text along Y=53:"
$inWord = $false
$wordStart = 0
for ($x = 50; $x -le 750; $x++) {
    $c = $bmp.GetPixel($x, 53)
    $isText = ($c.R -gt 90 -and $c.G -gt 90 -and $c.B -gt 90)
    if ($isText -and -not $inWord) {
        $inWord = $true
        $wordStart = $x
    } elseif (-not $isText -and $inWord) {
        $inWord = $false
        $colIndex = [Math]::Round(($wordStart - 57.5) / 13)
        Write-Output "Month label around X=$wordStart -> corresponds to Col $colIndex"
    }
}
$bmp.Dispose()
