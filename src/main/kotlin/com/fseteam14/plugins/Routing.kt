package com.fseteam14.plugins

import com.fseteam14.Student
import com.fseteam14.studentList
import freemarker.cache.ClassTemplateLoader
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.freemarker.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureRouting() {
    val freeLoaderPlugin = install(FreeMarker) {
        templateLoader = ClassTemplateLoader(this::class.java.classLoader, "templates")
    }
    routing {
        route("/home") {
            get {
                call.respond(FreeMarkerContent("home.ftl", mapOf("students" to studentList)))
            }
        }
        route("/student") {
            get {
                call.respond(FreeMarkerContent("student.ftl", mapOf("student" to Student("", ""))))
            }
            post {
                val postParameters: Parameters = call.receiveParameters()
                studentList.add(Student(postParameters["name"] ?: "", postParameters["email"] ?: ""))
                call.respondRedirect("/home", false)
                //call.respond(FreeMarkerContent("home.ftl", mapOf("students" to studentList)))
            }
        }
    }
}
