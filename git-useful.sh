# 还原到某个版本

# ref: http://stackoverflow.com/questions/4372435/how-can-i-rollback-a-github-repository-to-a-specific-commit
git reset --hard <old-commit-id>
# git push -f <remote-name> <branch-name>  # 这句不知道后面两个参数怎么写 用下面一句
git push origin HEAD --force
