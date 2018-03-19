<template>
  <div class="app-container">
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="table-expand">
          <el-form-item label="所属部门">
            <span>{{ props.row.fk_department.department_name }}</span>
          </el-form-item>
          <el-form-item label="地址">
            <span>{{ props.row.fk_idc.place_name }}</span>
          </el-form-item>
          <el-form-item label="资产类型">
            <span>{{ props.row.fk_asset_type.asset_type_name }}</span>
          </el-form-item>
          <el-form-item label="厂家">
            <span>{{ props.row.fk_manufactory.manufactory }}</span>
          </el-form-item>
          <el-form-item label="供应商">
            <span>{{ props.row.fk_supplier.supplier }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="标签">
            <span>{{ props.row.tags[0].tag_name }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column> 
      <el-table-column align="center" label='SN' width="95">
        <template slot-scope="scope">
          {{scope.row.sn}}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{scope.row.asset_name}}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.fk_admin.username}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Price" sortable width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.price}}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.fk_asset_state.asset_state_name | statusFilter">{{scope.row.fk_asset_state.asset_state_name}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_date" sortable label="Buy_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.trade_date}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        '在用': 'success',
        '故障': 'gray',
        '停用': 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      const data = getList()
      this.list = data.results
      this.listLoading = false
    }
  }
}
</script>

<style>
  .table-expand {
    font-size: 0;
  }
  .table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
