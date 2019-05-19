var url = "http://119.3.246.90:8090/iserver/services/map-ugcv5-DongZhan333DiTu/rest/maps/东站333底图",trainMap,
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
        originResult:{"viewBounds":{"top":41.554970602788565,"left":82.14006286791144,"bottom":41.51625114941144,"leftBottom":{"x":82.14006286791144,"y":41.51625114941144},"right":82.17878232128857,"rightTop":{"x":82.17878232128857,"y":41.554970602788565}},"viewer":{"leftTop":{"x":0,"y":0},"top":0,"left":0,"bottom":256,"rightBottom":{"x":256,"y":256},"width":256,"right":256,"height":256},"distanceUnit":null,"minVisibleTextSize":0,"coordUnit":"DEGREE","scale":1.5714552575179423E-5,"description":null,"paintBackground":false,"maxVisibleTextSize":0,"maxVisibleVertex":0,"clipRegionEnabled":false,"antialias":false,"textOrientationFixed":false,"angle":0,"prjCoordSys":{"distanceUnit":"METER","projectionParam":null,"epsgCode":4326,"coordUnit":"DEGREE","name":"GCS_WGS_1984","projection":null,"type":"PCS_EARTH_LONGITUDE_LATITUDE","coordSystem":{"datum":{"name":"D_WGS_1984","type":"DATUM_WGS_1984","spheroid":{"flatten":0.0033528106647474805,"name":"WGS_1984","axis":6378137,"type":"SPHEROID_WGS_1984"}},"unit":"DEGREE","spatialRefType":"SPATIALREF_EARTH_LONGITUDE_LATITUDE","name":"GCS_WGS_1984","type":"GCS_WGS_1984","primeMeridian":{"longitudeValue":0,"name":"Greenwich","type":"PRIMEMERIDIAN_GREENWICH"}}},"minScale":0,"markerAngleFixed":false,"overlapDisplayedOptions":null,"visibleScales":[1.5714552575179423E-5,3.1429105150358845E-5,6.28582103007175E-5,1.257164206014358E-4,2.5143284120286843E-4,5.028656824057495E-4,0.001005731364811499,0.002011462729622998,0.004022925459245187,0.00804585091849361],"visibleScalesEnabled":true,"customEntireBoundsEnabled":false,"clipRegion":null,"maxScale":0,"customParams":"","center":{"x":82.1594225946,"y":41.5356108761},"dynamicPrjCoordSyses":[{"distanceUnit":"METER","projectionParam":null,"epsgCode":4326,"coordUnit":"DEGREE","name":"GCS_WGS_1984","projection":null,"type":"PCS_EARTH_LONGITUDE_LATITUDE","coordSystem":{"datum":{"name":"D_WGS_1984","type":"DATUM_WGS_1984","spheroid":{"flatten":0.0033528106647474805,"name":"WGS_1984","axis":6378137,"type":"SPHEROID_WGS_1984"}},"unit":"DEGREE","spatialRefType":"SPATIALREF_EARTH_LONGITUDE_LATITUDE","name":"GCS_WGS_1984","type":"GCS_WGS_1984","primeMeridian":{"longitudeValue":0,"name":"Greenwich","type":"PRIMEMERIDIAN_GREENWICH"}}}],"colorMode":null,"textAngleFixed":false,"overlapDisplayed":false,"userToken":{"userID":""},"cacheEnabled":false,"dynamicProjection":false,"autoAvoidEffectEnabled":true,"customEntireBounds":null,"name":"东站333底图","bounds":{"top":41.5500857651,"left":82.0631768268,"bottom":41.5211359871,"leftBottom":{"x":82.0631768268,"y":41.5211359871},"right":82.2556683624,"rightTop":{"x":82.2556683624,"y":41.5500857651}},"backgroundStyle":null}
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
               window.location.href = loginUrl;
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
                window.location.href = loginUrl;
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
                window.location.href = loginUrl;
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
