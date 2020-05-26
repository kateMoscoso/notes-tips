# Configuration
* Central way of defining values that are loade upon starting the application (should not be changed during runtime)
* Configurtion per environment - development, staging, production etc.
* Configuration can be defined in the code base. Useful if you work with multiple developers via version control. Your configuration should always work for with code it ships with.
* Can be definedd in mnyy ways (JSON, YAML, XML, Environment Variiables, etc), using custom solutions or open-source libraries.

## Codebase vs environment variables
* You coul define configuration in your codebase. For example, in config folder.
 You could also support configuring values via enviroment variables (which are provided when running the application).

 Example:

 Non-sensitive information such as the port to run the application on, will be define in the code base.

 Sensitive information such as database usrname and password for production mode, will be provided via environment variables upon running the application.
 

 https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner