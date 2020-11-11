using E_commerce.Models;
using E_commerce.ModelView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Repository.Admin
{
    public interface IAdminRepository
    {
        Task<IEnumerable<ApplicationUser>> GetUsersAsync();
        Task<IEnumerable<UserRoleModel>> GetUserRoleAsync();

    }
}
