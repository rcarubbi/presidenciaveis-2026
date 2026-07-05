param([string]$DataDir = "src/data")

$allFiles = Get-ChildItem "$DataDir/*.ts" | Where-Object { $_.Name -notlike "media-*" -and $_.Name -notlike "index*" -and $_.Name -notlike "polls*" -and $_.Name -notlike ".version*" } | Sort-Object Name

$script:allUrls = @{}

foreach ($file in $allFiles) {
    $content = Get-Content $file.FullName -Raw
    $name = $file.Name -replace '\.ts$',''
    $type = if ($name -match '^proposals-') { "proposal" } else { "data" }
    $candidateId = $name -replace '^proposals-',''
    
    # Match both single and double quoted URLs
    $urlMatches = [regex]::Matches($content, "'((https?://[^']+))'")
    foreach ($m in $urlMatches) {
        $url = $m.Groups[1].Value
        if (-not $script:allUrls.ContainsKey($url)) {
            $script:allUrls[$url] = @{candidates=@(); count=0}
        }
        $script:allUrls[$url].candidates += "$candidateId($type)"
        $script:allUrls[$url].count++
    }
    
    $urlMatches2 = [regex]::Matches($content, '"((https?://[^"]+))"')
    foreach ($m in $urlMatches2) {
        $url = $m.Groups[1].Value
        if (-not $script:allUrls.ContainsKey($url)) {
            $script:allUrls[$url] = @{candidates=@(); count=0}
        }
        $script:allUrls[$url].candidates += "$candidateId($type)"
        $script:allUrls[$url].count++
    }
}

Write-Host "UNIQUE_SOURCE_URLS: $($script:allUrls.Count)"
Write-Host "`nURL|COUNT|CANDIDATES"
$script:allUrls.GetEnumerator() | Sort-Object Name | ForEach-Object {
    $url = $_.Key
    $info = $_.Value
    $cands = ($info.candidates | Select-Object -Unique) -join ', '
    Write-Host "$url | $($info.count) | $cands"
}
