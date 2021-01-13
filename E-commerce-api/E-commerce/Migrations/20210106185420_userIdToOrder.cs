using Microsoft.EntityFrameworkCore.Migrations;

namespace E_commerce.Migrations
{
    public partial class userIdToOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "userId",
                table: "orders",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_orders_userId",
                table: "orders",
                column: "userId");

            migrationBuilder.AddForeignKey(
                name: "FK_orders_AspNetUsers_userId",
                table: "orders",
                column: "userId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_orders_AspNetUsers_userId",
                table: "orders");

            migrationBuilder.DropIndex(
                name: "IX_orders_userId",
                table: "orders");

            migrationBuilder.DropColumn(
                name: "userId",
                table: "orders");
        }
    }
}
