val ktor_version: String by project
val kotlin_version: String by project
val logback_version: String by project

plugins {
    kotlin("jvm") version "1.8.10"
    id("io.ktor.plugin") version "2.2.4"
    id("com.google.cloud.tools.appengine") version "2.4.2"
}

group = "com.fseteam14"
version = "0.0.1"
application {
    mainClass.set("com.fseteam14.ApplicationKt")

    val isDevelopment: Boolean = project.ext.has("development")
    applicationDefaultJvmArgs = listOf("-Dio.ktor.development=$isDevelopment")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.ktor:ktor-server-core-jvm:$ktor_version")
    implementation("io.ktor:ktor-server-netty-jvm:$ktor_version")
    implementation("io.ktor:ktor-server-freemarker:$ktor_version")
    implementation("ch.qos.logback:logback-classic:$logback_version")
    testImplementation("io.ktor:ktor-server-tests-jvm:$ktor_version")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit:$kotlin_version")
}

appengine {
    configure<com.google.cloud.tools.gradle.appengine.appyaml.AppEngineAppYamlExtension> {
        stage {
            setArtifact("build/libs/${project.name}-all.jar")
        }
        deploy {
            version = "1"
            projectId = "fseteam14"
        }
    }
}