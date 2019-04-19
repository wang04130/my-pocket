function ZJ(){        //创建组件
    this.int()
    this.value = 0
}
ZJ.prototype = {          //给组件添加属性
    int(){
        this.ocenter = document.createElement('center')           /*动态生成按钮与文本框*/
        this.button_add = document.createElement('button')
        this.oinput = document.createElement('input')
        this.button_sub = document.createElement('button')
        this.button_add.innerText = '+'    /* 给按钮及文本框添加内容*/
        this.oinput.value = 0
        this.button_sub.innerText = '-'
        this.ocenter.appendChild(this.button_add)     //把添加的按钮及文本框塞进center里面
        this.ocenter.appendChild(this.oinput)
        this.ocenter.appendChild(this.button_sub)
        document.body.appendChild(this.ocenter)       //把center塞进界面上去
        this.button_add.addEventListener('click',this.add.bind(this))    //给‘+’按钮添加一个点击事件
        this.button_sub.addEventListener('click',this.sub.bind(this))    //给‘-’按钮添加一个点击事件
    },
    add(){                  //事件：点击时文本框里的数字加1
        this.value++
        this.oinput.value = this.value
    },
    sub(){                 //事件： 点击时文本框里的数字减1，当文本框里的数字变成0时，点击减号文本框里的数字不变
        this.value--
        if(0 >= this.value){
            this.value = 0
        }
        this.oinput.value = this.value
    }
}