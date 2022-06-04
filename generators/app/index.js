// 此文件作为generatoer 的核心入口，需要导出一个继承自 Yeoan generator 的类型
// Yeomam-generator 在工作室会自动调用我们再次类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父亲提供的一些工具方法实现一些功能，例如文件写入

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname, // appname 为项目生生成目录名称
    }).then((answers) => {
      this.answers = answers;
    });
  }
  writing() {
    // this.fs.write(
    //     this.destinationPath('temp.txt'),
    //     Math.random().toString()
    // )

    //通过模版方式写入文件到目标路径
    const tmpl = this.templatePath('bar.html');
    const output = this.destinationPath('bar.html');
    // const context = { title: 'hello world!', success: false };
    const context = this.answers;
    this.fs.copyTpl(tmpl, output, context);
  }
};
