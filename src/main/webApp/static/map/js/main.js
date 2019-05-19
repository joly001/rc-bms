var url = "http://119.3.246.90:8090/iserver/services/map-KuAKaXianLuXinXi/rest/maps/东站333@最新43582",trainMap,
    messageControl,loadSon1,loadSon2,localPage,loadSon,fatherDivH,list1H,list1TbodyH从,cordonLine,redCable,kilometer;

$(function(){
    init();
})
function init() {
    document.title="资源open layers3表述";
   // login();
    loadMap();
    loadMessage();
    selectEvent();
    dataList();
    loadArea();
    loadWarning();
    selectEventPerson();
    $("#loadUpDown").click(function(){
        if(fatherDivH){
            loadHeightDown();
        }else{
            loadHeightUp();
        }
    });

}

function login(){

    var comment = {
        'username':'admin',
        'password':'888888'
    };
    axios.post(baseUrl+"/rc-bms/user/login", {
        username: 'admin',
        password: '888888'
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}

function loadMap() {
     trainMap = new TrainMap({
        originResult:{"viewBounds":{"top":4623898.623665297,"left":432601.7618150609,"bottom":4623880.506250784,"leftBottom":{"x":432601.7618150609,"y":4623880.506250784},"right":432619.8792295738,"rightTop":{"x":432619.8792295738,"y":4623898.623665297}},"viewer":{"leftTop":{"x":0,"y":0},"top":0,"left":0,"bottom":256,"rightBottom":{"x":256,"y":256},"width":256,"right":256,"height":256},"distanceUnit":"METER","minVisibleTextSize":0.1,"coordUnit":"METER","scale":0.003738576124381197,"description":"","paintBackground":true,"maxVisibleTextSize":1000,"maxVisibleVertex":3600000,"clipRegionEnabled":false,"antialias":false,"textOrientationFixed":false,"angle":0,"prjCoordSys":{"distanceUnit":"METER","projectionParam":{"centralParallel":0,"firstPointLongitude":0,"rectifiedAngle":0,"scaleFactor":1,"falseNorthing":0,"centralMeridian":87,"secondStandardParallel":0,"secondPointLongitude":0,"azimuth":0,"falseEasting":500000,"firstStandardParallel":0},"epsgCode":4538,"coordUnit":"METER","name":"China_2000_3_DEGREE_GK_Zone_29N","projection":{"name":"Gauss_Kruger","type":"PRJ_GAUSS_KRUGER"},"type":"PCS_CHINA_2000_3_DEGREE_GK_29N","coordSystem":{"datum":{"name":"D_China_2000","type":"DATUM_CHINA_2000","spheroid":{"flatten":0.00335281068118232,"name":"CGCS2000","axis":6378137,"type":"SPHEROID_CHINA_2000"}},"unit":"DEGREE","spatialRefType":"SPATIALREF_EARTH_LONGITUDE_LATITUDE","name":"GCS_China_2000","type":"GCS_CHINA_2000","primeMeridian":{"longitudeValue":0,"name":"Greenwich","type":"PRIMEMERIDIAN_GREENWICH"}}},"minScale":0,"markerAngleFixed":false,"overlapDisplayedOptions":{"allowPointWithTextDisplay":true,"horizontalOverlappedSpaceSize":0,"allowPointOverlap":true,"allowThemeGraduatedSymbolOverlap":false,"verticalOverlappedSpaceSize":0,"allowTextOverlap":false,"allowThemeGraphOverlap":false,"allowTextAndPointOverlap":true},"visibleScales":[5.841525194345576E-5,1.1683050388691152E-4,2.336610077738228E-4,4.6732201554764666E-4,9.346440310952977E-4,0.0018692880621905953,0.003738576124381197],"visibleScalesEnabled":true,"customEntireBoundsEnabled":false,"clipRegion":{"center":null,"parts":null,"style":null,"prjCoordSys":null,"id":0,"type":"REGION","partTopo":null,"points":null},"maxScale":1.0E12,"customParams":"","center":{"x":432610.8205223174,"y":4623889.564958041},"dynamicPrjCoordSyses":[{"distanceUnit":null,"projectionParam":null,"epsgCode":0,"coordUnit":null,"name":null,"projection":null,"type":"PCS_ALL","coordSystem":null}],"colorMode":"DEFAULT","textAngleFixed":false,"overlapDisplayed":false,"userToken":{"userID":""},"cacheEnabled":true,"dynamicProjection":false,"autoAvoidEffectEnabled":true,"customEntireBounds":null,"name":"东站333@最新43582","bounds":{"top":4624460.912806389,"left":432081.5990853539,"bottom":4623057.4961914765,"leftBottom":{"x":432081.5990853539,"y":4623057.4961914765},"right":433792.9482847886,"rightTop":{"x":433792.9482847886,"y":4624460.912806389}},"backgroundStyle":{"fillGradientOffsetRatioX":0,"markerSize":2.4,"fillForeColor":{"red":255,"green":255,"blue":255,"alpha":255},"fillGradientOffsetRatioY":0,"markerWidth":0,"markerAngle":0,"fillSymbolID":0,"lineColor":{"red":0,"green":0,"blue":0,"alpha":255},"markerSymbolID":0,"lineWidth":0.1,"markerHeight":0,"fillOpaqueRate":100,"fillBackOpaque":true,"fillBackColor":{"red":255,"green":255,"blue":255,"alpha":255},"fillGradientMode":"NONE","lineSymbolID":0,"fillGradientAngle":0}}
        ,url:url
    });

    cordonLine  =  new CordonLine(trainMap.getMap());
    redCable = new RedCable(trainMap.getMap())
    kilometer = new Kilometer(trainMap.getMap());
}

function loadMessage() {
    messageControl = new MessageControl({
        url:wsUrl,
        onopen:function(){console.log("connect success")},
        onclose:function(){console.log("connect close")},
        onerror:function(){console.log("connect error")},
        onmessage:function(data){
            if(data){
                trainMap.addPoints(data);
            }else{
                console.error("数据解析失败");
            }
        }
    });
}

function minpoint(a,b){
    var x=(a[0]+b[0])/2;
    var y=(a[1]+b[1])/2;
    return [x,y];


}

function loadArea(){

    axios.post(baseUrl+"/rc-bms/mileageSegment/all", {
        pageSize:15,
        currentPage:1
    })
        .then(function (response) {
            if(response.data&&response.data._exceptionMessage&&(response.data._exceptionMessage == "000002")){
                parent.reLogin();
                // window.location.href = loginUrl;
                console.log(response);
                return;
            }
            createParentList(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}


function createParentList(firstDataList){
    var sp = new SelectPlugin({
        fistUlId:"workingInterval"
    });
    loadSon = {};
    sp.createParentList({
        data:firstDataList.data._data.list,
        customKeyValue:{
            name:"mileageSegmentName"
        },
        fn:function (o){
            console.log($(o).data());
            var id =  $(o).attr("id");
            var type = $(o).attr("datatype");
            var pId = $(o).data().id;
            if(!loadSon[pId]){

                axios.post(baseUrl+"/rc-bms/workSegment/mileageWorkSegment", {
                    mileageSegmentId:pId
                })
                    .then(function (response) {
                        sp.createSonList({
                            pId:id,
                            data:response.data._data.list,
                            customKeyValue:{
                                name:"workSegmentName"
                            },
                            fn:function (o){
                                console.log($(o).data());
                                var c = minpoint([$(o).data().startLongitude,$(o).data().startLatitude],[$(o).data().endLongitude,$(o).data().endLatitude]);
                                trainMap.moveTo(c)
                            }
                        });
                        showSonDiv(id+"_div");
                        loadSon[pId] = "load";
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                return;
            }
            if($("#"+id+"_div").is(':hidden')){
                $("#"+id+"_div").show();
            }else{
                $("#"+id+"_div").hide();
            }
            showSonDiv(id+"_div");
        }
    })
}

function selectEvent(){


    var time = null;
    var list = $("#navlist");
    var box = $("#navbox");
    var lista = list.find("a");

    for(var i=0,j=lista.length;i<j;i++){
        if(lista[i].className == "now"){
            var olda = i;
        }
    }

    var box_show = function(hei){
        box.stop().animate({
            height:hei,
            opacity:1
        },400);
    }

    var box_hide = function(){
        box.stop().animate({
            height:0,
            opacity:0
        },400);
    }

    lista.hover(function(){
        lista.removeClass("now");
        $(this).addClass("now");
        clearTimeout(time);
        box.find(".cont").show();
        var _height = box.find(".cont").height()+54;
        box_show(190)
    },function(){
        time = setTimeout(function(){
            box.find(".cont").hide();
            box_hide();
        },50);
        lista.removeClass("now");
        lista.eq(olda).addClass("now");
    });

    box.find(".cont").hover(function(){
        var _index = box.find(".cont").index($(this));
        lista.removeClass("now");
        lista.eq(_index).addClass("now");
        clearTimeout(time);
        $(this).show();
        var _height = $(this).height()+54;
        //box_show(_height);
    },function(){
        time = setTimeout(function(){
            $(this).hide();
            box_hide();
        },50);
        lista.removeClass("now");
        lista.eq(olda).addClass("now");
    });
}

function selectEventPerson(){


    var time = null;
    var list = $("#navlist2");
    var box = $("#navbox2");
    var lista = list.find("a");

    for(var i=0,j=lista.length;i<j;i++){
        if(lista[i].className == "now"){
            var olda = i;
        }
    }

    var box_show = function(hei){
        box.stop().animate({
            height:hei,
            opacity:1
        },400);
    }

    var box_hide = function(){
        box.stop().animate({
            height:0,
            opacity:0
        },400);
    }

    lista.hover(function(){
        lista.removeClass("now");
        $(this).addClass("now");
        clearTimeout(time);
        box.find(".cont").show();
        var _height = box.find(".cont").height()+10;
        box_show(_height)
    },function(){
        time = setTimeout(function(){
            box.find(".cont").hide();
            box_hide();
        },50);
        lista.removeClass("now");
        lista.eq(olda).addClass("now");
    });

    box.find(".cont").hover(function(){
        var _index = box.find(".cont").index($(this));
        lista.removeClass("now");
        lista.eq(_index).addClass("now");
        clearTimeout(time);
        $(this).show();
        var _height = $(this).height()+10;
        box_show(_height);
    },function(){
        time = setTimeout(function(){
            $(this).hide();
            box_hide();
        },50);
        lista.removeClass("now");
        lista.eq(olda).addClass("now");
    });


}

function showSonDiv(i){
    var o = $("#"+i);
    if(o.is(':hidden')){
        var h =  $("#navbox").height()-o.height();
        $("#navbox").animate({
            height:h,
            opacity:1
        },400);

    }else{
        var h =  $("#navbox").height()+o.height();
        $("#navbox").animate({
            height:h,
            opacity:1
        },400);

    }

}

function dataList(){
    //列定义，注意是又层中括号
    var cols = [[
        {field:'id',title:'序号',displayTip:true, width:10, align:'center',formatter:function(value,row,index){ return index+1}},
        {field:'createTime',title:'告警时间',displayTip:true,width:150,align:'center',formatter:function(value){
                var date = new Date(Number(value));
                return  date.toLocaleString();
            }},
        {field:'mileageSegmentName',title:'作业区间',displayTip:true,width:100,align:'center'},
        {field:'workSegmentName',title:'作业面',displayTip:true,width:100,align:'center'},
        {field:'depName',title:'部门名称',displayTip:true,width:150,align:'center'},
        {field:'builderUserType',title:'人员类型',displayTip:true,width:50,align:'center',formatter:function(value,row,index){
                if(value == '00'){
                    return '机车';
                }else if(value == '01'){
                    return '列车';
                }else if(value == '02'){
                    return '作业人员';
                }else if(value == '03'){
                    return '作业负责人';
                }else if(value == '04'){
                    return '安全员';
                }else if(value == '05'){
                    return '防护员';
                }else if(value == '06'){
                    return '监理';
                }else{
                    return '其他人员';
                }
            }},
        {field:'nick',title:'姓 名',displayTip:true,width:70,align:'center'},
        {field:'mobile',title:'联系电话',displayTip:true,width:60,align:'center'},
        {field:'type',title:'告警原因',displayTip:true,width:80,align:'center',formatter:function(value,row,index){
                if(value == '00'){
                    return '<div style="text-align:center;background-color:#ff45ac;border-radius:6px;color: white">接近警告线</div>';
                }else if(value == '01'){
                    return '<div style="text-align:center;background-color:#ffa647;border-radius:6px;color: white">碾压光缆</div>';
                }else if(value == '02'){
                    return '<div style="text-align:center;background-color:#004d90;border-radius:6px;color: white">线缆附近动土</div>';
                }else{

                }
            }}
    ]];

    //表格初始化
    $('#list1').datagrid({
        idField:"id", //明确唯一主键
       // frozenColumns:[[{field:'ck',checkbox:fale}]],//复选框列
        columns:cols,//普通列
        showHeader:true,//是否显示表头，默认true显示
        nowrap:true, //false可自动换行，默认true
       // width:"100%", //初始宽
        height:130, //实始高
        pagination:true //显示分页栏
    });

    localPage = 2;

    loadListData();

    window.setInterval(loadListData, 5000);

    function loadListData(){
        axios.post(baseUrl+"/rc-bms/workWarning/list", {
            pageSize:15,
            currentPage:1
        }).then(function (response) {
            if(response.data&&response.data._exceptionMessage&&(response.data._exceptionMessage == "000002")){
                parent.reLogin();
                // window.location.href = loginUrl;
                console.log(response);
                return;
            }
            //加载数据
            $('#list1').datagrid("loadData",response.data._data.pageItems);
        }).catch(function (error) {
            console.log(error);
        });
    }

}

function loadWarning(){
    //列定义，注意是又层中括号
    var cols = [[
        {field:'id',title:'序号',displayTip:true, width:10, align:'center',formatter:function(value,row,index){ return index+1}},
        {field:'nick',title:'司机',displayTip:true,width:70,align:'center'},
        {field:'type',title:'接近类型',displayTip:true,width:70,align:'center',formatter:function (value,row,index){
            if(value =="00" ){
                    return '列车临站';
             }else{
                    return '列车接近';
            }
         }},
        {field:'direction',title:'上/下行',displayTip:true,width:70,align:'center',formatter:function(value,row,index){
            if(value =="0"){
                return '上行'
            }else{
                return '下行'
            }
            }},
        {field:'warningContent',title:'告警内容',displayTip:true,width:250,align:'center'}
    ]];

    //表格初始化
    $('#list2').datagrid({
        idField:"id", //明确唯一主键
        // frozenColumns:[[{field:'ck',checkbox:fale}]],//复选框列
        columns:cols,//普通列
        showHeader:true,//是否显示表头，默认true显示
        nowrap:true, //false可自动换行，默认true
        // width:"100%", //初始宽
        height:130, //实始高
        pagination:true //显示分页栏
    });

    localPage = 2;

    loadListData();

    window.setInterval(loadListData, 5000);

    function loadListData(){
        axios.post(baseUrl+"/rc-bms/trainWarning/list", {
            pageSize:15,
            currentPage:1
        }).then(function (response) {
            if(response.data&&response.data._exceptionMessage&&(response.data._exceptionMessage == "000002")){
                parent.reLogin();
                // window.location.href = loginUrl;
                console.log(response);
                return;
            }
            //加载数据
            $('#list2').datagrid("loadData",response.data._data.pageItems);
        }).catch(function (error) {
            console.log(error);
        });
    }

}

function loadHeightUp(){
    fatherDivH = $("#fatherDiv").height();
    list1H = $("#list1").height();
    list1TbodyH = $("#list1").find("tbody").height();
    $("#fatherDiv").height(382);
    $("#list1").height(313);
    $("#list1").find("tbody").height(275);
}

function loadHeightDown() {
    $("#fatherDiv").height(fatherDivH);
    $("#list1").height(list1H);
    $("#list1").find("tbody").height(list1TbodyH);

    fatherDivH = null;
}

function showType(type,obj){
    trainMap.showForType(type,$(obj).is(':checked'));
}


function showLayer(type,obj){
    trainMap.showForLayer(type,$(obj).is(':checked'));
    switch (type) {
        case 'CordonLine':
            if($(obj).is(':checked')){
                cordonLine.addLayer();
            }else{
                cordonLine.removeLayer();
            }
            break;
        case 'Cable':
            if($(obj).is(':checked')){
                redCable.addLayer();
            }else{
                redCable.removeLayer();
            }
            break;
        case 'Kilometer':
            if($(obj).is(':checked')){
                kilometer.addLayer();
            }else{
                kilometer.removeLayer();
            }
            break
        default:
            console.error("未找到对应图层");
    }
}
