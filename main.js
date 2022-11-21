window.addEventListener('load', function () {
    let lazy = document.querySelector('.lazy');
    let arrow_l = document.querySelector('.arrow_l');
    let arrow_r = document.querySelector('.arrow_r');
    let main = document.querySelector('.Shuffling_figure');
    let set = document.querySelector('.sff');
    let roid = document.querySelector('.roid');

    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(() => {
            let step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft === target) {
                clearInterval(obj.timer);
                return;
            };
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 17);
    };

    for (let i = 0; i < main.children.length; i++) {
        let li = this.document.createElement('li');
        li.setAttribute('index', i);
        roid.appendChild(li);
        li.addEventListener('click', function () {
            for (let k = 0; k < roid.children.length; k++) {
                roid.children[k].className = '';
            }
            this.className = 'cls';
            let index = this.getAttribute('index');
            num = index;
            dot = index;
            animate(main, -index * 1226);
        });
    };

    let node = main.children[0].cloneNode(true);
    main.appendChild(node);
    let num = 0;
    let dot = 0;
    arrow_r.addEventListener('click', function () {
        if (num === main.children.length - 1) {
            main.style.left = 0;
            num = 0;
        }
        num++;
        animate(main, -num * 1226);
        dot++;
        if (dot === roid.children.length) {
            dot = 0;
        }
        for (let i = 0; i < roid.children.length; i++) {
            roid.children[i].className = '';
        }
        roid.children[dot].className = 'cls';
    });

    arrow_l.addEventListener('click', function () {
        if (num == 0) {
            num = main.children.length - 1;
            main.style.left = -num * 1226 + 'px';
        }
        num--;
        animate(main, -num * 1226);
        dot--;
        if (dot < 0) {
            dot = roid.children.length - 1;
        }
        for (let i = 0; i < roid.children.length; i++) {
            roid.children[i].className = '';
        }
        roid.children[dot].className = 'cls';
    });
    let timer = setInterval(function() {
        arrow_r.click();
    },2500);

    set.addEventListener('mouseenter', function() {
        clearInterval(timer);
        timer = null;
    });

    set.addEventListener('mouseleave', function() {
        timer = setInterval(function() {
            arrow_r.click();
        },2500);
    });
    roid.children[0].className = 'cls';
})
