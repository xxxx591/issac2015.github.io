/*
 *背景切换
 */
var val = {
    fa_id:"bg",
    son_class:"bg",
    speed:1500,
    interval:4500,
};

function banner(opts){
    //输入值为父级的ID以及最大子元素的类名
    console.log(opts);
    console.log(opts.fa_id);
    var banner = document.getElementById(opts.fa_id);    //获取当前banner的对象
    var banner_img = $("#"+opts.fa_id).children("."+opts.son_class);   //获取所有子元素的对象
    var img_num = banner_img.length;   //获取当前banner的图片张数
    var speed = opts.speed;       //渐变持续时间，单位：毫秒
    var interval = opts.interval; //间隔时间
    var currentImg = 0;   //当前显示的图片，初始化时保留显示第一张图片。
    init();   //调用初始化函数；

    function init()
    {
        //初始化
        console.log(img_num);
        //部分变量默认值初始化
        if(!speed){speed = 1000; console.log(speed);}
        if(!interval){interval = 3000; console.log(interval);}
        if(speed<50){speed = 50; alert("速度时间间隔不得小于50ms");}
        if(speed>interval){interval = 2*speed;alert('变化时间不得大于变化间隔');}


        for(i=1; i<img_num;i++){
            //隐藏多余的图片
            banner_img.eq(i).hide();    
        }
        t1 = setTimeout(function(){picChange();},1500);
    }

    function picChange()
    {
        //自动轮换
        banner_img.eq(currentImg).fadeOut(speed);
        banner_img.eq((currentImg + 1)%img_num).fadeIn(speed);
        currentImg = (currentImg + 1)%img_num;
        t2 = setTimeout(function(){picChange();},interval);
    }
}
banner(val);


