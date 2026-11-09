Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

$xStart = 57
$xEnd = 742
$numCols = 53
$colPitch = ($xEnd - $xStart) / ($numCols - 1)
$yRows = @(73, 86, 99, 112, 125, 138, 151)

$grid = @()

for ($c = 0; $c -lt $numCols; $c++) {
    $x = [Math]::Round($xStart + ($c * $colPitch))
    $week = @()
    for ($r = 0; $r -lt 7; $r++) {
        $y = $yRows[$r]
        $color = $bmp.GetPixel($x, $y)
        
        $level = 0
        if ($color.G -ge 180 -and $color.G -gt $color.R) {
            $level = 4
        } elseif ($color.G -ge 130 -and $color.G -gt $color.R) {
            $level = 3
        } elseif ($color.G -ge 80 -and $color.G -gt $color.R) {
            $level = 2
        } elseif ($color.G -ge 40 -and $color.G -gt $color.R) {
            $level = 1
        } else {
            $level = 0
        }
        $week += $level
    }
    $grid += ,$week
}

# Print visual summary of green squares
$totalGreen = 0
for ($c = 0; $c -lt $numCols; $c++) {
    $active = ($grid[$c] | Where-Object { $_ -gt 0 }).Count
    $totalGreen += $active
    if ($active -gt 0) {
        Write-Output "Col $c ($active active): $($grid[$c] -join ',')"
    }
}
Write-Output "Total active days detected: $totalGreen"

# Output as JavaScript array format for easy pasting
$jsRows = @()
for ($c = 0; $c -lt $numCols; $c++) {
    $jsRows += "  [" + ($grid[$c] -join ', ') + "]"
}
$jsContent = "export const GITHUB_EXACT_WEEKS: number[][] = [`n" + ($jsRows -join ",`n") + "`n];"
Set-Content -Path "scratch\github_exact_grid.ts" -Value $jsContent

$bmp.Dispose()

