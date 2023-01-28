// poem
var words=[
     '从明天起，做一个幸福的人',
    '喂马，劈材，周游世界',
    '从明天起，关心粮食和蔬菜',
    '我有一所房子，面朝大海，春暖花开',
    '从明天起，和每一个亲人通信',
    '告诉他们我的幸福',
    '那幸福的闪电告诉我的',
    '我将告诉每一个人',
    '给每一条河',
    '给每一座山',
    '取一个温暖的名字',
    '陌生人',
    '我也为你祝福',
    '祝福一个叫春的女孩',
    '愿你有一个灿烂的前程',
    '愿你在尘世中能收获幸福',
    '更愿你面朝大海，春暖花开',
    '珍惜黄昏的村庄',
    '珍惜雨水的村庄',
    '万里飘雪庆祝一个女孩的降临',
    '如同庆贺新年一样',
    '唉，时间真是一个讨厌的东西，你不觉得吗',
    '我这支歌将抚摸你的前额，犹如那祝福的亲吻',
    '当你独自一人时，它又会坐在身旁与你耳语',
    '当你陷入人群时',
    '它又会保护你远离尘嚣',
    '这支歌将会成为你梦想的羽翼',
    '它将载着你的心',
    '到达那未知的边缘',
    '当黑夜遮蔽了你的路时',
    '它又成为照耀在',
    '你头顶的璀璨星光',
    '夜夜流光相皎洁',
    '让无人传颂的歌谣，再度启唱',
    '高洁而纯真的灵魂，踏上旅途',
    '为过往的种种画上完整的句号',
    '并予明日的美好的祝福',
    '空梦无常，愿好运分你一半',
    '浮生短暂，愿美好永不断续',
    '你的颜色，正如漫天繁星',
    '愿你成为真正无瑕之人',
    '和光同尘',
    '杳霭流玉',
    '月落星沉',
    '霞姿月韵',
    '喜上眉梢',
    '落花人独立',
    '微雨燕双飞',
    '掬水月在手',
    '弄花香满衣',
    '垆边人似月',
    '皓腕凝霜雪',
    '众里嫣然通一顾',
    '人间颜色如尘土',
    '若非群玉山头见',
    '会向瑶台月下逢',
    '沉鱼落雁鸟惊喧',
    '羞花闭月花愁颤',
    '解释春风无限恨',
    '不管是寄予感动的热泪还是深切的同情',
    '我们仍坚信无数次的探索，迷途，失败和成功',
    '一定会给予热情的，客观，公正的评定',
    '是的，一定要等待他们的评定',
    '坚定地相信未来吧',
    '相信不屈不挠的努力',
    '相信战胜死亡的年轻',
    '相信未来，相信自己，热爱生命，热爱生活',
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '今晚，整夜星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '愿后面的日子里';
                                          
        texttwo.innerHTML = '去成为一颗';
                                                                                   
        textthree.innerHTML = '暖暖的向日葵';   
                                                                                      
      },112500)


 
