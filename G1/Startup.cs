using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(G1.Startup))]
namespace G1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            app.MapSignalR();
        }
    }
}
