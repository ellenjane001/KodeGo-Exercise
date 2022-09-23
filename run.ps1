# git init
# git branch -M main
# git remote add origin https://github.com/ellenjane001/combinators.git
git add .
$commit = Read-Host -Prompt 'commit message'
git commit -m "$commit -- $(Get-Date)"
# git push