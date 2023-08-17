import fs from 'fs'
import inquirer from 'inquirer'
import downloadGit from 'download-git-repo'


const TYPE_MAP = {
    'vite项目模版': 'http://8qty3yxk.elelive.cn/elelive_web/vite_template.git'
}

const question = [
    {
        type: 'input',
        name: 'name',
        message: '请输入项目名称？',
    },
    {
        type: 'list',
        message: '请选择模版？',
        name: 'type',
        choices: ['vite项目模版'],
    }
]

function updateName(name) {
    const packageJsonContent = fs.readFileSync(`./${name}/package.json`, 'utf8');
    const packageJson = JSON.parse(packageJsonContent);
    packageJson.name = name;
    fs.writeFileSync(`./${name}/package.json`, JSON.stringify(packageJson, null, 2));
    console.log('成功')
}

function create() {
    inquirer
        .prompt(question)
        .then(res => {
            downloadGit(`direct:${TYPE_MAP[res.type]}`, res.name, {clone: true}, (err) => {
                if (err) {
                    console.log(err)
                    return
                }
                updateName(res.name)

            })
        })
        .catch(error => {
            console.error('出现错误', error)
        });

}


export default create
