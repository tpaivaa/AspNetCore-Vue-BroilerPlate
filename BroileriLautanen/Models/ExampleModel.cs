using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BroileriLautanen.Models
{
    public class ExampleModel
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public decimal BankBalance { get; set; }
        public List<ExampleArrayItem> ItemList { get; set; }
    }
    public class ExampleArrayItem
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }

}
