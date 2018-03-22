<template>
  <div class="app-container">
      <asset-dialog :visible.sync="dialogFormVisible"></asset-dialog>
    <div class="filter-container">

      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" v-model="listQuery.asset_name">
      </el-input>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">Search</el-button>
      <router-link to='/example/newasset'>
        <el-button class="filter-item" type="primary" icon="el-icon-plus">Add New Asset</el-button>
      </router-link>
      <el-button type="primary" icon="el-icon-plus" class="filter-item" @click="dialogFormVisible=true">快速添加</el-button>

      <!--
      <el-select clearable style="width: 90px" class="filter-item" v-model="listQuery.importance" :placeholder="$t('table.importance')">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
      <el-select clearable class="filter-item" style="width: 130px" v-model="listQuery.type" :placeholder="$t('table.type')">
        <el-option v-for="item in  calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key">
        </el-option>
      </el-select>
      <el-select @change='handleFilter' style="width: 140px" class="filter-item" v-model="listQuery.sort">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key">
        </el-option>
      </el-select>
      <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">{{$t('table.search')}}</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">{{$t('table.add')}}</el-button>
      <el-button class="filter-item" type="primary" :loading="downloadLoading" v-waves icon="el-icon-download" @click="handleDownload">{{$t('table.export')}}</el-button>
      <el-checkbox class="filter-item" style='margin-left:15px;' @change='tableKey=tableKey+1' v-model="showReviewer">{{$t('table.reviewer')}}</el-checkbox>
      -->
    </div>
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
      <el-table-column label="操作" width="60">
      <template slot-scope="scope">
        <el-button type="text" size="medium">报修</el-button>
      </template>
    </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination background @current-change="handleCurrentChange" :page-sizes="[12]" :current-page="listQuery.page" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import assetDialog from '@/views/dialog/asset.vue'
export default {
  data() {
    return {
      list: null,
      listLoading: true,
      total: null,
      dialogFormVisible: false,
      listQuery: {
        page: 1,
        pricemin: null,
        pricemax: null,
        asset_name: '',
        ordering: null
      }
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
  components: {
    assetDialog
  },
  methods: {
    fetchData() {
      this.listLoading = true
      // const data = getList()
      // this.list = data.results
      // this.listLoading = false
      getList(this.listQuery).then(response => {
        this.list = response.data.results
        this.total = response.data.count
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.fetchData()
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
