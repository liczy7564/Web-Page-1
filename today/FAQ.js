$(document).ready(function(){

  $(".offbtntype").on("mouseenter", function(){
    let munutype = document.getElementsByClassName("munutype");
    for (i = 0; i < munutype.length; i++) {
      munutype[i].style.display = "none"; 
    }
  })

  //第三層關閉
  $("#labtitle-2").on("click", function(){
    let Zebra = document.getElementsByClassName("Zebra");
    for (i = 0; i < Zebra.length; i++) {
      Zebra[i].style.display = "none"; 
    }
  });

  let browse=document.querySelector(".browse");
  $.ajax({
    url:"browse/browse.json",
    success:function(result){
      let start = 0;
      let total_num = result.length;
      let default_num = parseInt(5);
      let range =  Math.ceil(total_num / default_num);
      let addcontent = "";
      for (let first = 0; first < range; first++) {
        addcontent+="<div class='mySlides'><div class='text-center'>";
        for (let second = 0; second < default_num; second++) {
          if(start != total_num){
            addcontent+="<div class='browsed-block-link-5' href='"+
            result[start]['link']+"'><img class='browsed-image-5' src='"+
            result[start]['img']+"'><p>"+result[start]['name']+"<br>NTD$"+
            result[start]['Price']+"</p></div>";
            start++;
          }
        }
        addcontent+="</div></div>";
        browse.innerHTML = addcontent ; 
        let mySlides = document.getElementsByClassName("mySlides");
        for (i = 0; i < mySlides.length; i++) {
          mySlides[i].style.display = "none";  
        }
        mySlides[0].style.display = "block";
      }
    }
  });

  //phone
  let browsed=document.querySelector(".browsed");
  $.ajax({
    url:"browse/browse.json",
    success:function(result){
      let start = 0;
      let total_num = result.length;
      let default_num = parseInt(3);
      let range =  Math.ceil(total_num / default_num);
      var addcontent = "";
      for (let first = 0; first < range; first++) {
        addcontent+="<div class='mySlidesa'><div class='text-center'>";
        for (let second = 0; second < default_num; second++) {
          if(start != total_num){
            addcontent+="<div class='browsed-block-link-3' href='"+
            result[start]['link']+"'><img class='browsed-image-3' src='"+
            result[start]['img']+"'><p>"+result[start]['name']+"<br>NTD$"+
            result[start]['Price']+"</p></div>";
            start++;
          }
        }
        addcontent+="</div></div>";
        browsed.innerHTML = addcontent ;
        let mySlidesa = document.getElementsByClassName("mySlidesa");
        for (i = 0; i < mySlidesa.length; i++) {
          mySlidesa[i].style.display = "none";  
        }
        mySlidesa[0].style.display = "block";
      }
    }
  });

//四項問題class="labZebra" value="9"
//購物流程  
  let Shopping=document.querySelector(".shopping");
  $.ajax({
    url:"fouritems/Shop.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
        Shopping.innerHTML+="<button class='Shop_content' value='"+[i+1]+"'><span class='fouritemicon'>?</span><span class='fouritemlittletitle'>"+result[i]['question']+"</span></button>";
        if(result[i]['remark'] === null){
          result[i]['remark'] = "";
        }
        Shopping.innerHTML+="<div class='fmajorShopping' style='display: none;'><hr><h4><span><strong>"+result[i]['title']+"<br></strong></span></h4><p>"+result[i]['content']+"</p><p>"+result[i]['remark']+"</p>";
      }
      Shop_content_recall();
    }
  });

  let Information=document.querySelector(".Information");
  $.ajax({
    url:"fouritems/Information.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
        if(result[i]['remark'] === null){
          result[i]['remark'] = "";
        }
        Information.innerHTML+="<button class='Information_content' value='"+[i+1]+"'><span class='fouritemicon'>?</span><span class='fouritemlittletitle'>"+result[i]['question']+"</span></button>";
        Information.innerHTML+="<div class='fmajorInformation'style='display: none;'><hr><p>"+
        result[i]['remark']+"</p><h4><span><strong>"+
        result[i]['title_1']+"<br></strong></span></h4><p>"+
        result[i]['content_1']+"</p><h4><span><strong>"+
        result[i]['title_2']+"<br></strong></span></h4><p>"+
        result[i]['content_2']+"</p></div>";
      }
      Information_content_recall();
    }
  });

  let install=document.querySelector(".install");
  $.ajax({
    url:"fouritems/install.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
        install.innerHTML+="<button class='install_content' value='"+[i+1]+"'><span class='fouritemicon'>?</span><span class='fouritemlittletitle'>"+result[i]['question']+"</span></button>";
        install.innerHTML+="<div class='fmajorinstall'style='display: none;'><hr><h4><span><strong>"+
        result[i]['title_1']+"<br></strong></span></h4><p>"+
        result[i]['content_1']+"</p><h4><span><strong>"+
        result[i]['title_2']+"<br></strong></span></h4><p>"+
        result[i]['content_2']+"</p></div>";
      }
      install_content_recall();
    }
  });

  let service=document.querySelector(".service");
  $.ajax({
    url:"fouritems/service.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
        if(result[i]['content']['title_2'] === null){
          result[i]['content']['title_2'] = "";
        }
        if(result[i]['content']['content_2'] === null){
          result[i]['content']['content_2'] = "";
        }
        if(result[i]['remark'] === null){
          result[i]['remark'] = "";
        }
      }
      for(let i=0;i<result.length;i++){
        service.innerHTML+="<button class='service_content' value='"+[i+1]+"'><span class='fouritemicon'>?</span><span class='fouritemlittletitle'>"+result[i]['question']+"</span></button>";
        service.innerHTML+="<div class='fmajorservice'style='display: none;'><hr><h4><span><strong>"+
        result[i]['content']['title_1']+"<br></strong></span></h4><p>"+
        result[i]['content']['content_1']+"</p><h4><span><strong>"+
        result[i]['content']['title_2']+"<br></strong></span></h4><p>"+
        result[i]['content']['content_2']+"</p><p>"+result[i]['remark']+"</p>"
      }
      service_content_recall();
    }
  });

  //點擊空白處關閉
  document.body.onclick = offall;
  function offall(){
    let i;
    let munutype = document.getElementsByClassName("munutype");
    for (i = 0; i < munutype.length; i++) {
      munutype[i].style.display = "none"; 
    }
  }
  
  //離開分支關閉
  let menucollapse = document.querySelector('.menucollapse');
  menucollapse.addEventListener('mouseleave',function(){
    let i;
    let munutype = document.getElementsByClassName("munutype");
    for (i = 0; i < munutype.length; i++) {
      munutype[i].style.display = "none"; 
    }
  },false);
  
 
  // bar開關
  let barFunction=document.querySelector('.barFunction');
  barFunction.addEventListener('click',function(){
    let element = document.getElementById("navbarmainMenu");
  element.classList.toggle("navbarmainMenu");
  },false);
  //灰色區域按鈕
  let greylt=document.querySelector('.greylt');
  greylt.addEventListener('click',function(){
    document.getElementById('greywidth').style.margin = '17px 0 0 10px';
  },false);

  let greyrt=document.querySelector('.greyrt');
  greyrt.addEventListener('click',function(){
    document.getElementById('greywidth').style.margin = '17px 0 0 -92px';
  },false);

  // $(".btntype").mouseover(function(){
  //   let id = $(this).attr("value");
  //   btntype(id);
  //   // console.log("id:",id);
  // });

  //mune
  $(".btntype").on("mouseover",function(){
    let id = $(this).attr("value");
    btntype(id);
  });
  function btntype(num) {
    let i;
    let munutype = document.getElementsByClassName("munutype");
    for (i = 0; i < munutype.length; i++) {
      munutype[i].style.display = "none"; 
    }
    munutype[num-1].style.display = "block";  
    munutype[num-1].style.animation = "munedown .5s";
    munutype[num-1].style.height = "350px";   
  }

  //Collection分支
  $(".Collectiontyp").on("mouseover",function(){
    let num = $(this).attr("value");
    Collectiontyp(num);
  });
  function Collectiontyp(num) { 
    let i;
    let Collectionmunu = document.getElementsByClassName("Collectionmunu");
    let Collectionimg = document.getElementsByClassName("Collectionimg");   
    for (i = 0; i < Collectionimg.length; i++) {
      Collectionmunu[i].style.display = "none"; 
      Collectionimg[i].style.display = "none";
    }
    Collectionmunu[num].style.display = "block"; 
    Collectionimg[num].style.display = "block"; 
  }

  //第三層
  $(".labZebra").on("click",function(){
    let num = $(this).attr("value");
    labZebra(num);
  });
  function labZebra(num) {
    let Zebra = document.getElementsByClassName("Zebra");
      $(Zebra[num]).slideToggle(200);
  }
  function Shop_content_recall(){
    $(".Shop_content").on("click",function(){
      let num = $(this).attr("value");
      Shop_content(num);
    });
  }
  function Shop_content(num){
    let fmajorShopping = document.getElementsByClassName("fmajorShopping");
    $(fmajorShopping[num-1]).slideToggle(200);   
  }
  function install_content_recall(){
    $(".install_content").click(function(){
      let num = $(this).attr("value");
      install_content(num);
    });
  }
  function install_content(num){
    let fmajorinstall = document.getElementsByClassName("fmajorinstall");
    $(fmajorinstall[num-1]).slideToggle(200);   
  }
  function service_content_recall(){
    $(".service_content").on("click",function(){
      let num = $(this).attr("value");
      service_content(num);
    });
  }
  function service_content(num){
    let fmajorservice = document.getElementsByClassName("fmajorservice");
    $(fmajorservice[num-1]).slideToggle(200);   
  }
  function Information_content_recall(){
    $(".Information_content").on("click",function(){
      let num = $(this).attr("value");
      Information_content(num);
    });
  }
  function Information_content(num){
    let fmajorInformation = document.getElementsByClassName("fmajorInformation");
    $(fmajorInformation[num-1]).slideToggle(200);   
  }


////已瀏覽
  let slideIndex = 1;
  let rightorleft;
  // showDivs(slideIndex);

  $(".plusDivs").on("click",function(){
    let num = $(this).attr("value");
    plusDivs(num);
  });
  function plusDivs(num) {
    // console.log(slideIndex += num);
    showDivs(slideIndex += parseInt(num));
    // showDivs(slideIndex += num);
    rightorleft=parseInt(num);
  }
  
  function showDivs(num) {
    let mySlides = document.getElementsByClassName("mySlides");
    if (num > mySlides.length) {slideIndex = 1}    
    if (num < 1) {slideIndex = mySlides.length} ;
    for (let i = 0; i < mySlides.length; i++) {
      mySlides[i].style.display = "none";  
    }      console.log(num);
    if(rightorleft<0){
      mySlides[slideIndex-1].style.animation = "fadenumr .5s"; 
      mySlides[slideIndex-1].style.display = "block";  
    }else{
      mySlides[slideIndex-1].style.animation = "fadenuml .5s"; 
      mySlides[slideIndex-1].style.display = "block";  
    }
  }
  let slideIndexa = 1;
  let leftorright;
  $(".plusDiv").on("click",function(){
    let mum = $(this).attr("value");
    plusDiv(mum);
  });
  function plusDiv(mum) {
    showDiv(slideIndexa += parseInt(mum));
    leftorright = parseInt(mum) ;
  }
  function showDiv(mum) {
    let mySlidesa = document.getElementsByClassName("mySlidesa");
    if (mum > mySlidesa.length) { slideIndexa = 1 };
    if (mum < 1) {slideIndexa = mySlidesa.length};
    for (let j = 0; j < mySlidesa.length; j++) {
      mySlidesa[j].style.display = "none"; 
      console.log(slideIndex);
    }
    if(leftorright<0){ 
      mySlidesa[slideIndexa-1].style.animation = "fadenumr .5s"; 
      mySlidesa[slideIndexa-1].style.display = "block";  
    }else{
      mySlidesa[slideIndexa-1].style.animation = "fadenuml .5s"; 
      mySlidesa[slideIndexa-1].style.display = "block";  
    } 
  }
});