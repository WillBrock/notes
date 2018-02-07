

// Specify what Subjects to add

// Specify what Courses to add passing in subject_title, options, using viewSubject

// Specify what Sections to add passing in subject_title, course_title, options using viewCourse


School.createSchool({

	subjects : [
		{
			subject_title = subject_1
		},
		{
			subject_title = subject_2
		}
	],
	courses : [
		{
			subject_title = subject_1
			course_title  = course_1
		},
		{
			subject_title = subject_1
			course_title  = course_2
		},
		{
			subject_title = subject_2
			course_title  = course_3
		}
	],
	sections : [
		{
			subject_title = subject_1
			course_title  = course_1
			section_title = section_1
		},
		{
			subject_title = subject_1
			course_title  = course_1
			section_title = section_2
		},
		{
			subject_title = subject_1
			course_title  = course_2
			section_title = section_3
		}
	]
})

