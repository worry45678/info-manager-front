<template>
  <el-container>
    <h1>hello</h1>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        id: 44,
        fk_admin: {
          id: 1,
          username: 'admin',
          first_name: '张飞',
          gender: 'male',
          mobile: null,
          image: 'http://192.168.131.86:8000/media/image/default.png',
          department: {
            id: 1,
            department_name: '运服中心',
            department_type: 1,
            memo: '很大的部门'
          },
          memo: ''
        },
        fk_department: {
          id: 2,
          department_name: '生产质量处',
          department_type: 1,
          memo: '测试生成！'
        },
        fk_idc: {
          id: 1,
          place_name: '部门机房',
          memo: null
        },
        fk_asset_type: {
          id: 1,
          asset_type_name: '电脑主机',
          code: 'Z',
          memo: null
        },
        fk_asset_state: {
          id: 4,
          asset_state_name: '报废',
          memo: '设备已经报废'
        },
        fk_business_unit: {
          id: 2,
          name: '普通办公',
          memo: '部门办公使用'
        },
        fk_manufactory: {
          id: 2,
          manufactory: '思科',
          support_num: '300000',
          address: '不知道哪里',
          memo: ''
        },
        fk_supplier: {
          id: 2,
          supplier: '打印机供应商1',
          support_num: '222131321321',
          address: '地址222222222',
          memo: ''
        },
        asset_name: '测试03',
        sn: 'Z2018011',
        user: 'ww',
        trade_date: '2018-01-12',
        price: 6689.0,
        repair_time: 464,
        memo: '156',
        tags: [1]
      }],
      defaultProps: {
        children: 'memo',
        label: 'id'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>
