param([string]$UrlFile = "C:\Users\rcaru\AppData\Local\Temp\opencode\all_urls.txt")

# Tier classification
function Get-Tier($url) {
    $tier1 = @(
        'g1.globo.com', 'folha.uol.com.br', 'uol.com.br', 'estadao.com.br', 'oglobo.globo.com',
        'cnnbrasil.com.br', 'bbc.com', 'bbc.co.uk', 'veja.abril.com.br', 'exame.com',
        'poder360.com.br', 'agenciabrasil.ebc.com.br', 'cartacapital.com.br', 
        'correiobraziliense.com.br', 'cbn.globo.com', 'valor.globo.com', 'metropoles.com',
        'gov.br', 'camara.leg.br', 'senado.leg.br', 'conjur.com.br'
    )
    $tier2 = @(
        'em.com.br', 'gazetadopovo.com.br', 'gazetasp.com.br', 'polemicaparaiba.com.br',
        'sbtnews.sbt.com.br', 'regionalzao.com.br', 'jornaltaguacei.com.br',
        'horadopovo.com.br', 'voxms.com.br', 'aconpelavida.com.br',
        'acessepolitica.com.br', 'parlamentobrasil.org', 'epsjv.fiocruz.br',
        'otempo.com.br', 'portal.al.go.leg.br', 'congressoemfoco.com.br',
        'revistaforum.com.br', 'brasilnocentro.com.br', 'goias24horas.com.br',
        'jnewscast.com.br', 'novo.org.br', 'pt.org.br', 'divulgacandcontas.tse.jus.br',
        '12.senado.leg.br', '25.senado.leg.br'
    )
    $tier4 = @(
        'blogspot.com', 'blogspot.com.br', 'youtube.com', 'medium.com',
        'prendeumatou.com.br', 'renansantospropostas.com.br', 'renansantos.wiki'
    )
    
    $hostname = ($url -replace 'https?://([^/]+).*','$1').ToLower()
    
    foreach ($d in $tier1) { if ($hostname -match [regex]::Escape($d) -or $hostname -eq $d) { return 1 } }
    foreach ($d in $tier2) { if ($hostname -match [regex]::Escape($d) -or $hostname -eq $d) { return 2 } }
    foreach ($d in $tier4) { if ($hostname -match [regex]::Escape($d) -or $hostname -eq $d) { return 4 } }
    
    # Check for wikipedia
    if ($hostname -match 'wikipedia.org') { return 3 }
    if ($hostname -match 'queroapoiar.com.br') { return 4 }
    if ($hostname -match 'caminhodamissao.com') { return 3 }
    if ($hostname -match 'datafolha.folha') { return 1 }
    
    return 2  # default Tier 2
}

$lines = Get-Content $UrlFile | Select-Object -Skip 2  # Skip header lines

Write-Host "TIER|URL|CANDIDATES"
$total = 0
$tier1Count = 0
$tier2Count = 0
$tier3Count = 0
$tier4Count = 0

foreach ($line in $lines) {
    if ([string]::IsNullOrWhiteSpace($line)) { continue }
    $parts = $line -split ' \| '
    if ($parts.Count -lt 3) { continue }
    $url = $parts[0].Trim()
    $count = $parts[1].Trim()
    $cands = $parts[2].Trim()
    
    $tier = Get-Tier $url
    $total++
    
    switch ($tier) {
        1 { $tier1Count++ }
        2 { $tier2Count++ }
        3 { $tier3Count++ }
        4 { $tier4Count++ }
    }
    
    Write-Host "$tier|$url|$cands"
}

Write-Host "`n=== TIER SUMMARY ==="
Write-Host "Total URLs: $total"
Write-Host "Tier 1 (Great imprensa): $tier1Count"
Write-Host "Tier 2 (Regional/especializada): $tier2Count"
Write-Host "Tier 3 (Wikipedia/partidarios): $tier3Count"
Write-Host "Tier 4 (Blogs/redes sociais): $tier4Count"
