var myChart = echarts.init(document.getElementById('cs_1'));

var option = {
    title: {
        text: 'X:Cache Size(KB) Y:Hit Rate(Percent %)'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: ['1', '2', '4', '8', '16', '32', '64', '128', '256', '512', '1024', '2048', '4096', '8192']
    },
    yAxis: {},
    animationDuration: 5000,
    series: [
        {
            name:'Direct-Mapped & Write-Through',
            type: 'line',
            data: [
                76.1868,
                81.8901,
                94.081,
                96.5613,
                97.9135,
                98.2295,
                98.7117,
                98.7783,
                98.7952,
                98.7952,
                98.8354,
                98.8354,
                98.8354,
                98.8354
            ]
        },
        {
            name:'Direct-Mapped & Write-Back',
            type: 'line',
            data: [
                76.1868,
                81.8901,
                94.081,
                96.5613,
                97.9135,
                98.2295,
                98.7117,
                98.7783,
                98.7952,
                98.7952,
                98.8354,
                98.8354,
                98.8354,
                98.8354
            ]
        },
        {
            name:'Fully Associative & Write-Through & FIFO',
            type: 'line',
            data: [
                34.6449,
                34.8224,
                36.2713,
                36.4095,
                39.6948,
                41.4033,
                44.813,
                52.9485,
                98.8611,
                98.8611,
                98.8611,
                98.8611,
                98.8611,
                98.8611
            ]
        },
        {
            name:'Fully Associative & Write-Through & LRU',
            type: 'line',
            data: [
                91.078,
                96.7183,
                97.866,
                98.6652,
                98.7981,
                98.8341,
                98.8417,
                98.8535,
                98.8611,
                98.8611,
                98.8611,
                98.8611,
                98.8611,
                98.8611
            ]
        },
        {
            name:'2-way Set Associative & Write-Through & LRU',
            type: 'line',
            data: [
                84.3865,
                92.6588,
                95.9168,
                98.2994,
                98.6537,
                98.8051,
                98.8262,
                98.8459,
                98.8582,
                98.8601,
                98.8601,
                98.8601,
                98.8601,
                98.8601
            ]
        },
        {
            name:'2-way Set Associative & Write-Through & Random',
            type: 'line',
            data: [
                83.6131,
                91.6822,
                95.237,
                97.866,
                98.4023,
                98.6583,
                98.7612,
                98.8321,
                98.8542,
                98.8605,
                98.8595,
                98.8598,
                98.8598,
                98.8605
            ]
        }
    ]
};

myChart.setOption(option);

myChart = echarts.init(document.getElementById('cs_2'));

option = {
    title: {
        text: 'X:Cache Line/Block Size(KB) Y:Miss Rate(Percent %)'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: ['2', '4', '8', '16', '32', '64', '128', '256', '512', '1024', '2048', '4096', '8192']
    },
    yAxis: {},
    animationDuration: 5000,
    series: [
        {
            name:'Direct-Mapped & Write-Through',
            type: 'line',
            data: [
                6.45009,
                6.24008,
                4.16535,
                2.27058,
                1.29343,
                0.809604,
                0.603473,
                0.480336,
                0.604051,
                0.639927,
                0.758994,
                3.3858,
                4.05481
            ]
        },
        {
            name:'Direct-Mapped & Write-Back',
            type: 'line',
            data: [
                6.45009,
                6.24008,
                4.16535,
                2.27058,
                1.29343,
                0.809604,
                0.603473,
                0.480336,
                0.604051,
                0.639927,
                0.758994,
                3.3858,
                4.05481
            ]
        },
        {
            name:'2-way Set Associative & Write-Through & LRU',
            type: 'line',
            data: [
                ,
                6.17337,
                4.08294,
                2.1839,
                1.17882,
                0.660288,
                0.392878,
                0.248212,
                0.170064,
                0.142336,
                0.147569,
                0.272065,
                0.387448
            ]
        },
        {
            name:'2-way Set Associative & Write-Through & Random',
            type: 'line',
            data: [
                6.38764,
                6.17705,
                4.08565,
                2.1903,
                1.18271,
                0.666106,
                0.395977,
                0.255001,
                0.179374,
                0.161338,
                0.17705,
                0.352347,
                0.515819
            ]
        }
    ]
};

myChart.setOption(option);

myChart = echarts.init(document.getElementById('cs_3'));

option = {
    title: {
        text: 'X:Replacement Policy Y:Miss Rate(Percent %)'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: ['FIFO', 'LRU', 'Random']
    },
    yAxis: {},
    animationDuration: 5000,
    series: [
        {
            name:'2-way Set Associative',
            type: 'line',
            data: [
                99.1662,
                33.2144,
                33.2144
            ]
        },
        {
            name:'32-way Set Associative',
            type: 'line',
            data: [
                99.1414,
                33.2144,
                33.2144
            ]
        }
    ]
};

myChart.setOption(option);