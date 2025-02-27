plugins {
	application
	kotlin("jvm") version "2.0.21"
}

group = "com.insuremo.rainbow"
version = "1.0-SNAPSHOT"

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.jetbrains.kotlin:kotlin-reflect:2.1.10")
	implementation("org.ow2.asm:asm:9.7.1")
	implementation("org.apache.groovy:groovy-all:4.0.25")
	implementation("org.jsoup:jsoup:1.18.3")
	testImplementation(kotlin("test"))
}

tasks.test {
	useJUnitPlatform()
}

kotlin {
	jvmToolchain(17)
}

application {
	mainClass.set("com.insuremo.rainbow.n19n4.BootstrapKt")
}
