<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="80px" style="max-width:500px">
      <el-form-item label="asset_name">
        <el-input v-model="form.asset_name"></el-input>
      </el-form-item>
      <el-form-item label="sn">
        <el-input v-model="form.sn"></el-input>
      </el-form-item>
      <el-form-item label="user">
        <el-input v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="trade_date">
        <el-input v-model="form.trade_date"></el-input>
      </el-form-item>
      <el-form-item label="price">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="repair_time">
        <el-input v-model="form.repair_time"></el-input>
      </el-form-item>
      <el-form-item label="memo">
        <el-input v-model="form.memo"></el-input>
      </el-form-item>
      <el-form-item label="资产类型">
        <el-select v-model="form.fk_asset_type" placeholder="请选择" @change="handleSelectType">
            <el-option
            v-for="item in options.asset_type"
            :key="item.code"
            :label="item.asset_type_name"
            :value="item.id">
            </el-option>
        </el-select>
        <el-input v-for="item in options.item" placeholder="请输入内容" v-model="form.parameters[item.id]" :key="item.id">
            <template slot="prepend">{{item.item_name}}</template>
        </el-input>
      </el-form-item>
      <el-form-item  label="资产状态">
        <el-select v-model="form.fk_asset_state" placeholder="请选择">
            <el-option
            v-for="item in options.asset_state"
            :key="item.memo"
            :label="item.asset_state_name"
            :value="item.id">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item  label="生产厂家">
        <el-select v-model="form.fk_manufactory" placeholder="请选择">
            <el-option
            v-for="item in options.manufactory"
            :key="item.address"
            :label="item.manufactory"
            :value="item.id">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item  label="supplier">
        <el-select v-model="form.fk_supplier" placeholder="请选择">
            <el-option
            v-for="item in options.supplier"
            :key="item.id"
            :label="item.supplier"
            :value="item.id">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item  label="department">
        <el-select v-model="form.fk_department" placeholder="请选择">
            <el-option
            v-for="item in options.department"
            :key="item.id"
            :label="item.department_name"
            :value="item.id">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item  label="BusinessUnit">
        <el-select v-model="form.fk_business_unit" placeholder="请选择">
            <el-option
            v-for="item in options.businessUnit"
            :key="item.id"
            :label="item.name"
            :value="item.id">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item  label="IDC">
        <el-select v-model="form.fk_idc" placeholder="请选择">
            <el-option
            v-for="item in options.idc"
            :key="item.id"
            :label="item.place_name"
            :value="item.id">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getList, create } from '@/api/form'

export default {
  data() {
    return {
      form: {
        fk_admin: '2', // 测试用
        asset_name: '',
        sn: '',
        user: '',
        trade_date: '',
        price: '',
        repair_time: '',
        memo: '',
        asset_type: '',
        resource: '',
        parameters: {},
        tags: [1
        ]
      },
      options: {
        asset_type: [],
        asset_state: [],
        item: [],
        parameter: [],
        manufactory: [],
        supplier: [],
        businessUnit: [],
        idc: [],
        tag: []

      },
      paramsList: [
        'asset_type',
        'asset_state',
        'parameter',
        'manufactory',
        'supplier',
        'businessUnit',
        'idc',
        'tag',
        'admin',
        'department'
      ]
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
      create('assetcreat', this.form).then(response => {
        console.log(response)
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    handleSelectType(value) {
      console.log(value)
      getList('item', { 'asset_type_id': value }).then(response => {
        this.options.item = response.data
      })
    },
    fetchData() {
      for (const i of this.paramsList) {
        getList(i).then(response => {
          this.options[i] = response.data
        })
      }
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

