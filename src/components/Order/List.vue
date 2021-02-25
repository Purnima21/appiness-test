<template>
  <div>
    <h1>Order List</h1>
    <el-table
      :data="tableData"
      class="orderTable"
      :row-class-name="tableRowClassName"
    >
      <el-table-column label="Order #" prop="id"></el-table-column>
      <el-table-column label="Customer Name" prop="name"></el-table-column>
      <el-table-column label="No. of Items" prop="items"></el-table-column>
      <el-table-column label="Total Amount" prop="amount"></el-table-column>
      <el-table-column label="Status" prop="status"></el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            plain
            @click="handleView(scope.$index, scope.row)"
            >View</el-button
          >
          <el-button
            size="mini"
            type="success"
            plain
            @click="handleUpdateStatus(scope.$index, scope.row)"
            >Change Status</el-button
          >
          <el-button
            size="mini"
            type="danger"
            plain
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getOrderList } from "../../mockAPI/mockApi";
export default {
  name: "OrderList",
  data() {
    return {
      tableData: getOrderList(),
      search: "",
    };
  },
  methods: {
    tableRowClassName({ row }) {
      if (row.status === "Pending") {
        return "warning-row";
      } else if (row.status === "Ready to serve") {
        return "success-row";
      }
      return "";
    },
    handleView(index, row) {
      this.$router.push(`order/${row.id}`);
    },
    handleUpdateStatus(rowIndex) {
      this.tableData.filter((value, index) => {
        if (value.status == "Order Received" && index == rowIndex) {
          value.status = "Pending";
          this.$message({
            message: "Order status changed to Pending",
            type: "success",
            duration: 2000,
          });
          return "success-row";
        } else if (value.status == "Pending" && index == rowIndex) {
          value.status = "Ready to serve";
          this.$message({
            message: "Order status changed is Ready to serve",
            type: "success",
            duration: 2000,
          });
          return "warning-row";
        } else if (value.status == "Ready to serve" && index == rowIndex) {
          this.$message.error("Food already served");
        }
      });
    },
    handleDelete(index) {
      this.$confirm(
        "This will permanently delete the Order Detail. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          this.tableData.splice(index, 1);
          this.$message({
            type: "success",
            message: "Delete completed",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
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
