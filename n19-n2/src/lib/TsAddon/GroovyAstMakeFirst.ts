export const GroovyAstMakeFirst = {
	GroovyLang: {
		Mixin: 'groovy.lang.Mixin',
		Binding: 'groovy.lang.Binding'
	},
	GroovyTransform: {
		BaseScript: 'groovy.transform.BaseScript',
		Internal: 'groovy.transform.Internal',
		Generated: 'groovy.transform.Generated',
		ImmutableOptions: 'groovy.transform.ImmutableOptions'
	},
	OrgCodehausGroovyRuntime: {
		InvokerHelper: 'org.codehaus.groovy.runtime.InvokerHelper',
		ObjectUtil: 'org.apache.groovy.runtime.ObjectUtil'
	},
	OrgCodehausGroovyTransform: {
		ImmutableASTTransformation: 'org.codehaus.groovy.transform.ImmutableASTTransformation'
	},
	OrgCodehausGroovyTransformTrait: {
		Traits$Implemented: 'org.codehaus.groovy.transform.trait.Traits$Implemented'
	},
	JavaLang: {
		Cloneable: 'java.lang.Cloneable',
		IllegalArgumentException: 'java.lang.IllegalArgumentException',
		StringBuilder: 'java.lang.StringBuilder'
	},
	JavaUtil: {
		Date: 'java.util.Date'
	}
} as const;