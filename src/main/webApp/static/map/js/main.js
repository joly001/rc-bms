var url = "http://47.94.11.219:8090/iserver/services/map-KUA/rest/maps/东站333_1@4326",trainMap,
    messageControl,loadSon1,loadSon2,localPage,loadSon;

$(function(){
    init();
})
function init() {
    document.title="资源open layers3表述";
    login();
    loadMap();
    loadMessage();
    selectEvent();
    dataList();
    loadArea();
    loadWarning();
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
        originResult:{"viewBounds":{"top":41.74646385083608,"left":86.1920203561631,"bottom":41.745599971786646,"leftBottom":{"x":86.1920203561631,"y":41.745599971786646},"right":86.19288423521253,"rightTop":{"x":86.19288423521253,"y":41.74646385083608}},"viewer":{"leftTop":{"x":0,"y":0},"top":0,"left":0,"bottom":256,"rightBottom":{"x":256,"y":256},"width":256,"right":256,"height":256},"distanceUnit":"METER","minVisibleTextSize":0.1,"coordUnit":"DEGREE","scale":7.043334204907002E-4,"description":"","paintBackground":true,"maxVisibleTextSize":1000,"maxVisibleVertex":3600000,"clipRegionEnabled":false,"antialias":false,"textOrientationFixed":false,"angle":0,"prjCoordSys":{"distanceUnit":"METER","projectionParam":null,"epsgCode":4326,"coordUnit":"DEGREE","name":"Longitude / Latitude Coordinate System---GCS_WGS_1984","projection":null,"type":"PCS_EARTH_LONGITUDE_LATITUDE","coordSystem":{"datum":{"name":"D_WGS_1984","type":"DATUM_WGS_1984","spheroid":{"flatten":0.00335281066474748,"name":"WGS_1984","axis":6378137,"type":"SPHEROID_WGS_1984"}},"unit":"DEGREE","spatialRefType":"SPATIALREF_EARTH_LONGITUDE_LATITUDE","name":"GCS_WGS_1984","type":"GCS_WGS_1984","primeMeridian":{"longitudeValue":0,"name":"Greenwich","type":"PRIMEMERIDIAN_GREENWICH"}}},"minScale":0,"markerAngleFixed":false,"overlapDisplayedOptions":{"allowPointWithTextDisplay":true,"horizontalOverlappedSpaceSize":0,"allowPointOverlap":true,"allowThemeGraduatedSymbolOverlap":false,"verticalOverlappedSpaceSize":0,"allowTextOverlap":false,"allowThemeGraphOverlap":false,"allowTextAndPointOverlap":true},"visibleScales":[],"visibleScalesEnabled":false,"customEntireBoundsEnabled":false,"clipRegion":{"center":null,"parts":null,"style":null,"prjCoordSys":null,"id":0,"type":"REGION","partTopo":null,"points":null},"maxScale":1.0E12,"customParams":"","center":{"x":86.19245229568781,"y":41.74603191131136},"dynamicPrjCoordSyses":[{"distanceUnit":null,"projectionParam":null,"epsgCode":0,"coordUnit":null,"name":null,"projection":null,"type":"PCS_ALL","coordSystem":null}],"colorMode":"DEFAULT","textAngleFixed":false,"overlapDisplayed":false,"userToken":{"userID":""},"cacheEnabled":true,"dynamicProjection":false,"autoAvoidEffectEnabled":true,"customEntireBounds":null,"name":"东站333_1@4326","bounds":{"top":41.75257005329401,"left":86.18339288847393,"bottom":41.739791493063485,"leftBottom":{"x":86.18339288847393,"y":41.739791493063485},"right":86.2041231679664,"rightTop":{"x":86.2041231679664,"y":41.75257005329401}},"backgroundStyle":{"fillGradientOffsetRatioX":0,"markerSize":2.4,"fillForeColor":{"red":255,"green":255,"blue":255,"alpha":255},"fillGradientOffsetRatioY":0,"markerWidth":0,"markerAngle":0,"fillSymbolID":0,"lineColor":{"red":0,"green":0,"blue":0,"alpha":255},"markerSymbolID":0,"lineWidth":0.1,"markerHeight":0,"fillOpaqueRate":100,"fillBackOpaque":true,"fillBackColor":{"red":255,"green":255,"blue":255,"alpha":255},"fillGradientMode":"NONE","lineSymbolID":0,"fillGradientAngle":0}},
        url:url
    });
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

function createSonList(){

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
        {field:'id',title:'序号',displayTip:true, width:100, align:'center'},
        {field:'createTime',title:'告警时间',displayTip:true,width:170,align:'center'},
        {field:'mileageSegmentName',title:'作业区间',displayTip:true,width:170,align:'center'},
        {field:'workSegmentName',title:'作业面',displayTip:true,width:170,align:'center'},
        {field:'depName',title:'部门名称',displayTip:true,width:170,align:'center'},
        {field:'builderUserType',title:'人员类型',displayTip:true,width:170,align:'center',formatter:function(value,row,index){
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
        {field:'nick',title:'姓 名',displayTip:true,width:170,align:'center'},
        {field:'mobile',title:'联系电话',displayTip:true,width:170,align:'center'},
        {field:'type',title:'告警原因',displayTip:true,width:170,align:'center',formatter:function(value,row,index){
                if(value == '00'){
                    return '接近警告线';
                }else {
                    return '其他';
                }
            }}
    ]];

    //表格初始化
    $('#list1').datagrid({
        idField:"id", //明确唯一主键
       // frozenColumns:[[{field:'ck',checkbox:fale}]],//复选框列
        columns:cols,//普通列
        showHeader:true,//是否显示表头，默认true显示
        nowrap:false, //false可自动换行，默认true
       // width:"100%", //初始宽
        height:130, //实始高
        pagination:true //显示分页栏
    });

    localPage = 2;
    axios.post(baseUrl+"/rc-bms/workWarning/list", {
        pageSize:15,
        currentPage:1
    }).then(function (response) {
            //加载数据
            $('#list1').datagrid("loadData",response.data._data.pageItems);
/*            $("#list1 .attachTable").find('tbody').scroll(function(){
                var $this =$(this);
                var scrollTop =$(this).scrollTop();        //滚动条top值
                var viewH =$(this).innerHeight();          //盒子高度
                var contentH =$(this).get(0).scrollHeight; //盒子内容高度
                if(scrollTop + viewH >= contentH-2) { //到达底部10px时,加载新内容
                    axios.post(baseUrl+"/rc-bms/workWarning/list", {
                        pageSize:15,
                        currentPage:localPage
                    }).then(function (response2) {
                        localPage++;
                        //加载数据
                        $('#list1').datagrid("loadData",response2.data._data.pageItems);
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            });*/
        }).catch(function (error) {
            console.log(error);
        });
}

function loadWarning(){
    //列定义，注意是又层中括号
    var cols = [[
        {field:'id',title:'序号',displayTip:true, width:100, align:'center'},
        {field:'nick',title:'司机',displayTip:true,width:170,align:'center'},
        {field:'type',title:'接近类型',displayTip:true,width:170,align:'center',formatter:function (value,row,index){
            if(value =="00" ){
                    return '列车临站';
             }else{
                    return '列车接近';
            }
         }},
        {field:'direction',title:'上/下行',displayTip:true,width:170,align:'center',formatter:function(value,row,index){
            if(value =="0"){
                return '上行'
            }else{
                return '下行'
            }
            }},
        {field:'warningContent',title:'告警内容',displayTip:true,width:170,align:'center'}
    ]];

    //表格初始化
    $('#list2').datagrid({
        idField:"id", //明确唯一主键
        // frozenColumns:[[{field:'ck',checkbox:fale}]],//复选框列
        columns:cols,//普通列
        showHeader:true,//是否显示表头，默认true显示
        nowrap:false, //false可自动换行，默认true
        // width:"100%", //初始宽
        height:130, //实始高
        pagination:true //显示分页栏
    });

    localPage = 2;
    axios.post(baseUrl+"/rc-bms/trainWarning/list", {
        pageSize:15,
        currentPage:1
    }).then(function (response) {
        //加载数据
        console.log(response);
        $('#list2').datagrid("loadData",response.data._data.pageItems);
/*        $("#list2 .attachTable").find('tbody').scroll(function(){
            var $this =$(this);
            var scrollTop =$(this).scrollTop();        //滚动条top值
            var viewH =$(this).innerHeight();          //盒子高度
            var contentH =$(this).get(0).scrollHeight; //盒子内容高度
            if(scrollTop + viewH >= contentH-2) { //到达底部10px时,加载新内容
                axios.post(baseUrl+"/rc-bms/trainWarning/list", {
                    pageSize:15,
                    currentPage:localPage
                }).then(function (response2) {
                    localPage++;
                    //加载数据
                    $('#list2').datagrid("loadData",response2.data._data.pageItems);
                }).catch(function (error) {
                    console.log(error);
                });
            }
        });*/
    }).catch(function (error) {
        console.log(error);
    });

}