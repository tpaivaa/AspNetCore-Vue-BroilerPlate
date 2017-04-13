using BroileriLautanen.Models;
using BroileriLautanen.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BroileriLautanen.Controllers.Api
{
    public class ExampleController : Controller
    {
        private readonly ExampleService _service;
        private ILogger<ExampleController> _logger;

        public ExampleController(ExampleService service, ILogger<ExampleController> logger)
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet("api/example")]
        public JsonResult GetExampleModel()
        {
            try
            {
                _logger.LogInformation("Get example model");
                var exampleModel = _service.GetExampleModel();
                return Json(exampleModel);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

                // This is just one way to do this. There is plenty of other ways to return
                // status description and status. One would be to return IActionResult instead of
                // JsonResult and give BadRequest.

                return Json(new JsonStatusResponseModel
                {
                    Description = "Error happened in get request",
                    StatusCode = 400
                });
            }
        }

        [HttpPost("api/example")]
        public JsonResult PostExampleModel([FromBody]ExampleModel model)
        {
            _logger.LogInformation("Post " + model?.Name);
            return Json(model);
        }

    }
}
