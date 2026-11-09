Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\johnk\.gemini\antigravity\brain\b0b62676-a7b8-455a-8d36-9aee9c0f8215\.user_uploaded\media_1794217210215_906ec386.png"
$bmp = [System.Drawing.Bitmap]::FromFile($imgPath)
Write-Output "Size: $($bmp.Width) x $($bmp.Height)"

# Find the bounding box of the grid squares
# In GitHub dark theme, background is #0d1117 (R~13, G~17, B~23) or border #161b22, #21262d.
# Square default empty is #161b22. Green squares have R < G and G > 40.
# Let's inspect some sample pixels across the image.
$bmp.Dispose()

