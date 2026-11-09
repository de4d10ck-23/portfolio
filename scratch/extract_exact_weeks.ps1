Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)

$x0 = 57.5
$numCols = 53
$yRows = @(72.5, 85.5, 98.5, 111.5, 124.5, 137.5, 150.5)

$grid = @()
$totalActive = 0

for ($c = 0; $c -lt $numCols; $c++) {
    $x = [Math]::Round($x0 + ($c * 13))
    $week = @()
    for ($r = 0; $r -lt 7; $r++) {
        $y = [Math]::Round($yRows[$r])
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
        
        if ($level -gt 0) { $totalActive++ }
        $week += $level
    }
    $grid += ,$week
}

Write-Output "Total active days detected: $totalActive"

for ($c = 0; $c -lt $numCols; $c++) {
    $active = ($grid[$c] | Where-Object { $_ -gt 0 }).Count
    if ($active -gt 0) {
        Write-Output "Week $c ($active active): $($grid[$c] -join ', ')"
    }
}

# Output TypeScript formatted code
$tsLines = @()
for ($c = 0; $c -lt $numCols; $c++) {
    $tsLines += "  [" + ($grid[$c] -join ', ') + "]"
}
$tsCode = "export const GITHUB_EXACT_WEEKS: number[][] = [`n" + ($tsLines -join ",`n") + "`n];"
Set-Content -Path "scratch\exact_weeks.ts" -Value $tsCode

$bmp.Dispose()
