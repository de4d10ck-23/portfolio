Add-Type -AssemblyName System.Drawing
$xStart = 57
$xEnd = 742
$numCols = 53
$colPitch = ($xEnd - $xStart) / ($numCols - 1)
for ($c = 30; $c -le 45; $c++) {
    $x = [Math]::Round($xStart + ($c * $colPitch))
    Write-Output "c=$c -> X=$x"
}
