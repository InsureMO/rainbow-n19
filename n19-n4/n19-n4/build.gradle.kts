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
