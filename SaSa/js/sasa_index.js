if(!window.jQuery){
    throw new Error("jd_index.js������jQuery��");
}
jQuery.fn.carousel=function(){
    var interval=3000;//ÿ������ֻ�һ��ͼƬ
    var duration=1000;//û������ֻ������ĳ���ʱ��
    var $imgList=this.children('img');//����img��ɵ����������
    var $liList=this.find('li');//���е�li��ɵ����������
    var cur=0;//��ǰ��ʾ�Ĺ������
    var next=1;//��һ��Ҫ��ʾ�Ĺ������

    //����һ�������Զ�ʱ����ÿ��һ��interval����һ���ֻ�
    setInterval(function(){
        lunHuan();
      },interval);
    $liList.click(function(){
        var i=$liList.index(this);//�����li������li�е����
        next=i;
        lunHuan();
    });


    //���й���ֻ�
    function lunHuan(){
        //�õ�next��liԲ�����.active,���ֵ�ɾ��.active
        $liList.eq(next).addClass("active").siblings(".active").removeClass("active");
        //�õ�ǰ��ʾ�Ĺ�������������󻬶�������ȥ��ɾ��.active
        $imgList.eq(cur).animate({left:"-100%"},duration,function(){
            $(this).removeClass("active");
        });
        //�ü���Ҫ��ʾ����һ�Ź�����.active,���������Ҳ࣬��ʼ�����������󻬶�
        $imgList.eq(next).addClass("active").css("left","100%").animate({left:"0"},duration);
        //�޸�cur��next������ֵ����cur�����ߺ�next����
        cur=next;
        next++;
        if(next>=$imgList.length){
            next=0;
        }
    }



    };

//����
//����һ����ʱ����ÿ��һ��ʱ�䣬div��margin-top -28px;
var marTop=0;
var plus=-1;
var noti=setInterval(function(){
    marTop+=28*plus;
    $('.notice_content').css('margin-top',marTop);
    if(marTop===-140){
        marTop=0;
    }
},3000);


/**
 * �����������
 * $(window).scrollspy(options)
 */
jQuery.fn.scrollspy=function(options){
    var $liList=$(options.target).find('li');
    //������ӵ����е�ĳ��������ʱ��ҳ�����������ָ��¥��λ��
    $liList.on('click','a',function(e){
        e.preventDefault();
        //this>a
        //����a��href���ԣ��ҵ����Ӧ��¥��ľ���ҳ�涥����ƫ����
        var floorId=$(this).attr('href');
        var top=$(floorId).offset().top;
        //��ҳ�����������ָ���ĸ߶�
        $('body').animate({scrollTop:top},500);
    });
    //����ҳ��Ĺ����¼�������¥�㿪�صĵ���
    //window.onscroll=function(){}
    $(window).scroll(function(){
        //��ȡwindow��������������ľ���
        var top=$(window).scrollTop();
        if(top<600){//���ڹ�����f1�Ϸ�
           $(options.target).fadeOut();
        }else if(top>6500){//f3�·�
            $(options.target).fadeOut();
        }else{//f1��f3֮��
            $(options.target).fadeIn();
        }
        //������ǰ��������¥��Ŀ���
        //˼·������ÿ��¥�㿪�أ��鿴��ǰ��window����ƫ���������Ǹ�¥���ƫ����
        $liList.each(function(i,li){
            var floorId=$(this).children("a").attr("href");
            var floorTop=$(floorId).offset().top;//ÿ��¥����붥����ƫ����
            if(top>=floorTop-200){
                $(li).addClass('active').siblings('.active').removeClass('active');
            }

        });

    })
}

























