using BroileriLautanen.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BroileriLautanen.Services
{
    public class ExampleService
    {
        public ExampleModel GetExampleModel()
        {
            var arrayItem1 = new ExampleArrayItem
            {
                Id = Guid.NewGuid(),
                Name = "Item1"
            };

            var arrayItem2 = new ExampleArrayItem
            {
                Id = Guid.NewGuid(),
                Name = "Item2"
            };
            return new ExampleModel
            {
                Age = 26,
                BankBalance = 1.32423235M,
                Name = "Santero",
                ItemList = new List<ExampleArrayItem> { arrayItem1, arrayItem2 }
            };
        }
    }
}
