
function createlabels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }

    
function createinput(tagname,attrname,attrvalue,content){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.innerHTML= content;
        return ele;
    }
function createlinebreak(tagname){
    var ele=document.createElement(tagname);
    return ele;
    }
    
var label=createlabels("label","for","firstname","firstname");
var br1=createlinebreak("br");
var input=createinput("input","type","text","id","name");
var br2=createlinebreak("br");

var label1= createlabels("label","for","middlename","middlename");
var br3=createlinebreak("br");
var input1=createinput("input","type","text","id","name");
var br4=createlinebreak("br");

var label2=createlabels("label","for","lastname","lastname");
var br5=createlinebreak("br");
var input2=createinput("input","type","text","id","name");
var br6=createlinebreak("br");

var label3=createlabels("label","for","phonenumber","phonenumber");
var br7=createlinebreak("br");
var input3=createinput("input","type","text","id","no");
var br8=createlinebreak("br");


document.body.append(label,br1,input,br2,label1,br3,input1,br4,label2,br5,input2,br6,label3,br7,input3,br8);

