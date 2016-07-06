/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
 var $ = function(id) {
  return document.getElementById(id);
 };
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = $("aqi-city-input").value;
    var aqi = $("aqi-value-input").value;
    
    if (!city.match(/^[\u4E00-\u9FA5]+$/)) {
        alert("城市名必须为中文词组。");
        return;
    }

    if (!aqi.match(/^\d+$/) || aqi > 500 || aqi < 0) {
        alert("AQI 必须为 0 至 500 的整数数值。");
        return;
    }

    aqiData[city] = aqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    $("aqi-table").innerHTML = "";
    // alert(aqiData[data]);
    for (var data in aqiData) {
        if ($("aqi-table").children.length === 0) {
            $("aqi-table").innerHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
        }
        $("aqi-table").innerHTML +=  "<tr><td>" + data + "</td><td>" + aqiData[data] + "</td><td><button class='del-btn'>删除</button></td></tr>";
        
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(event) {
    var city = event.target.parentElement.parentElement.children[0].innerHTML;
    delete aqiData[city];
    renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  $("add-btn").addEventListener("click", function() {
    addBtnHandle();
  });

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  $("aqi-table").addEventListener("click", function(event) {
    delBtnHandle(event);
  });
}

init();