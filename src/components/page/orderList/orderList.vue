<template>
  <div class="home">
    <v-header></v-header>
    <div>
      <h2>订单管理</h2>
      <div class="flex-row-start">
        <el-select v-model="selectType" placeholder="请选择">
          <el-option
            v-for="item in type"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-date-picker
          v-model="selectDate"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>

        <div>
          <el-select v-model="selectOrderStatus" placeholder="请选择">
            <el-option
              v-for="item in orderStatus"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </div>
      </div>

      <ul class='order-list'>
        <li class="flex-row-between">
          <div class="goods">商品信息</div>
          <div>数量</div>
          <div>收货人</div>
          <div>订单总价</div>
          <div>实付款</div>
          <div>状态</div>
          <div>操作 </div>
        </li>
        <li v-for="item in tableData" :key="item.order_no">
          <div class="time">下单时间：{{ item.order_time }} 订单编号：{{ item.order_no }}</div>
          <div class="flex-row-between">
            <div class="goods">
              <img v-for="img in item.imgs" :key="img" :src="img" />
            </div>
            <div class="tc">{{ item.qty }}</div>
            <div class="tc">{{ item.contact_name }}</div>
            <div class="tc">￥{{ item.total_amount }}</div>
            <div class="tc">￥{{ item.paid_amount }}</div>
            <div class="tc">{{ item.logistics_status_desc }}</div>
            <div class="tc">订单详情</div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import header from "../../common/header";
import { getOrderStatus, getOrderList } from "@/util/api";

export default {
  name: "orderList",
  components: {
    "v-header": header
  },
  data() {
    return {
      type: [
        {
          value: "0",
          label: "收货人"
        },
        {
          value: "1",
          label: "商品名称"
        },
        {
          value: "2",
          label: "订单编号"
        }
      ],
      orderStatus: [],
      selectType: "", //类型（收货人，商品名称，订单编号）
      selectDate: "", //筛选时间
      selectOrderStatus: "", //筛选的订单状态
      pageSize: 10,
      pageIndex: 1,
      tableData: [],
    };
  },
  mounted() {
    this.getOrderStatus();
    this.getOrderList();
  },
  methods: {
    //获取筛选订单状态
    getOrderStatus() {
      let params = {
        access_token: window.localStorage.getItem('token'),
        os: "pc",
        version: "1.0.0"
      };
      // console.log(params);
      getOrderStatus(params).then(res => {
        if(res.errno == 0) {
          this.orderStatus = res.data.logistics_status_by_query;
        }
      });
    },

    //获取商品列表
    getOrderList() {
      let params = {
        access_token: window.localStorage.getItem('token'),
        os: "pc",
        version: "1.0.0",
        order_no: '', //订单号
        commodity_name: '', //商品名称
        contact_name: '', //收件人
        start_order_date: '', //开始日期
        end_order_date: '', //结束日期
        logistics_status: this.selectOrderStatus, //订单状态
        page_index: this.pageIndex,
        page_size: this.pageSize,
      };
      // console.log(params);
      getOrderList(params).then(res => {
        if(res.errno == 0) {
          this.tableData = res.data.list;
        }
        console.log(this.tableData);
      });
    },

  }
};
</script>

<style scoped>
.order-list {
  width: 100%;
}

.order-list li {
  width: 100%;
  height: 120px;
  line-height: 80px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  margin:0 auto 10px;
}

.order-list li:first-child {
  height: 36px;
  line-height: 36px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border: 1px solid #e8e8e8;
}

.order-list li .time {
  height: 40px;
  line-height: 40px;
  text-align: left;
  background: #daf3ff;
}

.order-list li .goods {
  width: 20%;
}

.order-list li .goods img {
  width: 20%;
}


</style>
