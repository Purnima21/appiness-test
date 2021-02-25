<template>
  <div>
    <el-button
      size="mini"
      type="primary"
      plain
      @click="handleView()"
      >Back</el-button
    >
    <h1>Order Details</h1>
    <p>Order #: {{ data.id || "--" }}</p>
    <p>Items Name: {{ data.item_name || "--" }}</p>
    <p>Price: {{ data.amount || "--" }}</p>
    <p>Total Price: {{ data.total_price || "--" }}</p>
    <p>Customer Name: {{ data.name || "--" }}</p>
    <p>Delivery Address: {{ data.address || "--" }}</p>
  </div>
</template>

<script>
import { getOrderDetails } from "../../mockAPI/mockApi";
export default {
  props: ["id"],
  name: "OrderList",
  data() {
    return {
      data: getOrderDetails(this.$route.params.id),
    };
  },
  methods: {
    handleView() {
      this.$router.push(`/`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-table .warning-row {
  background: oldlace;
}
.el-table .success-row {
  background: #f0f9eb;
}
.orderTable {
  width: 95%;
  margin: auto;
  border: 1px solid;
  border-color: blanchedalmond;
}
.heading {
  text-align: center;
  color: gray;
  font-size: 40px;
}
</style>
