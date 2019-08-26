package auth

import grails.converters.JSON
import grails.core.GrailsApplication
import grails.plugins.*

class ApplicationController implements PluginManagerAware {

    GrailsApplication grailsApplication
    GrailsPluginManager pluginManager

    def index() {
        [grailsApplication: grailsApplication, pluginManager: pluginManager]
    }

    def login() {
        def info = JSON.parse(request.getReader().text)
        if (info['login'] == 'user' && info['password'] == 'user') {
            response.status = 201
            render info
        } else {
            response.sendError(401, 'Invalid username or password!')
        }
    }
}
