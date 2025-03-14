import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.ZipEntry', [
	[/* class description */
		[/* text */ 't', `This class is used to represent a ZIP file entry.`]
	],
	[/* fields */
		[/* field */ 'DEFLATED', [
			[/* field description */
				[/* text */ 't', `Compression method for compressed (deflated) entries.`]
			],
		]],
		[/* field */ 'STORED', [
			[/* field description */
				[/* text */ 't', `Compression method for uncompressed entries.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new zip entry with the specified name.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The entry name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the entry name is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the entry name is longer than
         0xFFFF bytes`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.zip.ZipEntry)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new zip entry with fields taken from the specified
 zip entry.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `A zip Entry object`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the entry object is null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'isDirectory()', [
			[/* method description */
				[/* text */ 't', `Returns true if this is a directory entry. A directory entry is
 defined to be one whose name ends with a '/'.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is a directory entry`]
			]
		]],
		[/* method */ 'getExtra()', [
			[/* method description */
				[/* text */ 't', `Returns the extra field data for the entry.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the extra field data for the entry, or null if none`]
			]
		]],
		[/* method */ 'getMethod()', [
			[/* method description */
				[/* text */ 't', `Returns the compression method of the entry.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the compression method of the entry, or -1 if not specified`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this entry.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this entry.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'getComment()', [
			[/* method description */
				[/* text */ 't', `Returns the comment string for the entry.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the comment string for the entry, or null if none`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the entry.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the entry`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the ZIP entry.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the object.`]
			]
		]],
		[/* method */ 'getCreationTime()', [
			[/* method description */
				[/* text */ 't', `Returns the creation time of the entry.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The creation time is from the extended timestamp fields of
 entry's `],
					[/* inline code block */ 'i', `optional extra data`],
					[/* text */ 't', ` when read from a ZIP file
 or ZIP file formatted stream.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the creation time of the entry, null if not specified`]
			]
		]],
		[/* method */ 'getLastAccessTime()', [
			[/* method description */
				[/* text */ 't', `Returns the last access time of the entry.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The last access time is from the extended timestamp fields
 of entry's `],
					[/* inline code block */ 'i', `optional extra data`],
					[/* text */ 't', ` when read from a ZIP file
 or ZIP file formatted stream.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The last access time of the entry, null if not specified`]
			]
		]],
		[/* method */ 'getLastModifiedTime()', [
			[/* method description */
				[/* text */ 't', `Returns the last modification time of the entry.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the entry is read from a ZIP file or ZIP file formatted
 input stream, this is the last modification time from the zip
 file entry's `],
					[/* inline code block */ 'i', `optional extra data`],
					[/* text */ 't', ` if the extended timestamp
 fields are present. Otherwise the last modification time is read
 from the entry's `],
					[/* inline code block */ 'i', `date and time fields`],
					[/* text */ 't', `, the `],
					[/* reference */ 'r', `java.util.TimeZone#getDefault()`, `default TimeZone`],
					[/* text */ 't', ` is used to convert
 the standard MS-DOS formatted date and time to the epoch time.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The last modification time of the entry, null if not specified`]
			]
		]],
		[/* method */ 'getTimeLocal()', [
			[/* method description */
				[/* text */ 't', `Returns the last modification time of the entry in local date-time.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the entry is read from a ZIP file or ZIP file formatted
 input stream, this is the last modification time from the zip
 file entry's `],
					[/* inline code block */ 'i', `optional extra data`],
					[/* text */ 't', ` if the extended timestamp
 fields are present. Otherwise, the last modification time is read
 from entry's standard MS-DOS formatted `],
					[/* inline code block */ 'i', `date and time fields`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `java.time.ZoneId#systemDefault()`, `system default TimeZone`],
					[/* text */ 't', `
 is used to convert the UTC time to local date-time.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The last modification time of the entry in local date-time`]
			]
		]],
		[/* method */ 'setCreationTime(java.nio.file.attribute.FileTime)', [
			[/* method description */
				[/* text */ 't', `Sets the creation time of the entry.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If set, the creation time will be stored into the extended
 timestamp fields of entry's `],
					[/* inline code block */ 'i', `optional extra data`],
					[/* text */ 't', `, when
 output to a ZIP file or ZIP file formatted stream.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `The creation time of the entry`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `time`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This zip entry`]
			]
		]],
		[/* method */ 'setLastAccessTime(java.nio.file.attribute.FileTime)', [
			[/* method description */
				[/* text */ 't', `Sets the last access time of the entry.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If set, the last access time will be stored into the extended
 timestamp fields of entry's `],
					[/* inline code block */ 'i', `optional extra data`],
					[/* text */ 't', `, when output
 to a ZIP file or ZIP file formatted stream.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `The last access time of the entry`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `time`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This zip entry`]
			]
		]],
		[/* method */ 'setLastModifiedTime(java.nio.file.attribute.FileTime)', [
			[/* method description */
				[/* text */ 't', `Sets the last modification time of the entry.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` When output to a ZIP file or ZIP file formatted output stream
 the last modification time set by this method will be stored into
 zip file entry's `],
					[/* inline code block */ 'i', `date and time fields`],
					[/* text */ 't', ` in `],
					[/* inline code block */ 'i', `standard MS-DOS date and time format`],
					[/* text */ 't', `), and the extended timestamp fields
 in `],
					[/* inline code block */ 'i', `optional extra data`],
					[/* text */ 't', ` in UTC time.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `The last modification time of the entry`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `time`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This zip entry`]
			]
		]],
		[/* method */ 'getCompressedSize()', [
			[/* method description */
				[/* text */ 't', `Returns the size of the compressed entry data.

 `],
				[/* block */ 'b', ` In the case of a stored entry, the compressed size will be the same
 as the uncompressed size of the entry.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the size of the compressed entry data, or -1 if not known`]
			]
		]],
		[/* method */ 'getCrc()', [
			[/* method description */
				[/* text */ 't', `Returns the CRC-32 checksum of the uncompressed entry data.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the CRC-32 checksum of the uncompressed entry data, or -1 if
 not known`]
			]
		]],
		[/* method */ 'getSize()', [
			[/* method description */
				[/* text */ 't', `Returns the uncompressed size of the entry data.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the uncompressed size of the entry data, or -1 if not known`]
			]
		]],
		[/* method */ 'getTime()', [
			[/* method description */
				[/* text */ 't', `Returns the last modification time of the entry.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the entry is read from a ZIP file or ZIP file formatted
 input stream, this is the last modification time from the `],
					[/* inline code block */ 'i', `date and time fields`],
					[/* text */ 't', ` of the zip file entry. The
 `],
					[/* reference */ 'r', `java.util.TimeZone#getDefault()`, `default TimeZone`],
					[/* text */ 't', ` is used
 to convert the standard MS-DOS formatted date and time to the
 epoch time.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The last modification time of the entry in milliseconds
          since the epoch, or -1 if not specified`]
			]
		]],
		[/* method */ 'setComment(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the optional comment string for the entry.

 `],
				[/* block */ 'b', `ZIP entry comments have maximum length of 0xffff. If the length of the
 specified comment string is greater than 0xFFFF bytes after encoding, only
 the first 0xFFFF bytes are output to the ZIP file entry.`]
			],
			[/* parameters */
				[/* parameter */ 'comment', [/* parameter description */
					[/* text */ 't', `the comment string`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setCompressedSize(long)', [
			[/* method description */
				[/* text */ 't', `Sets the size of the compressed entry data.`]
			],
			[/* parameters */
				[/* parameter */ 'csize', [/* parameter description */
					[/* text */ 't', `the compressed size to set`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setCrc(long)', [
			[/* method description */
				[/* text */ 't', `Sets the CRC-32 checksum of the uncompressed entry data.`]
			],
			[/* parameters */
				[/* parameter */ 'crc', [/* parameter description */
					[/* text */ 't', `the CRC-32 value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified CRC-32 value is
         less than 0 or greater than 0xFFFFFFFF`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setExtra(byte[])', [
			[/* method description */
				[/* text */ 't', `Sets the optional extra field data for the entry.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoking this method may change this entry's last modification
 time, last access time and creation time, if the `],
					[/* inline code block */ 'i', `extra`],
					[/* text */ 't', ` field
 data includes the extensible timestamp fields, such as `],
					[/* inline code block */ 'i', `NTFS tag 0x0001`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `Info-ZIP Extended Timestamp`],
					[/* text */ 't', `, as specified in
 `],
					[/* external link */ 'a', `http://www.info-zip.org/doc/appnote-19970311-iz.zip`, `Info-ZIP Application Note 970311`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'extra', [/* parameter description */
					[/* text */ 't', `The extra field data bytes`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the length of the specified
         extra field data is greater than 0xFFFF bytes`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setMethod(int)', [
			[/* method description */
				[/* text */ 't', `Sets the compression method for the entry.`]
			],
			[/* parameters */
				[/* parameter */ 'method', [/* parameter description */
					[/* text */ 't', `the compression method, either STORED or DEFLATED`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified compression
          method is invalid`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setSize(long)', [
			[/* method description */
				[/* text */ 't', `Sets the uncompressed size of the entry data.`]
			],
			[/* parameters */
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `the uncompressed size in bytes`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified size is less
         than 0, is greater than 0xFFFFFFFF when
         `],
					[/* text */ 't', `ZIP64 format`],
					[/* text */ 't', ` is not supported,
         or is less than 0 when ZIP64 is supported`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setTime(long)', [
			[/* method description */
				[/* text */ 't', `Sets the last modification time of the entry.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the entry is output to a ZIP file or ZIP file formatted
 output stream the last modification time set by this method will
 be stored into the `],
					[/* inline code block */ 'i', `date and time fields`],
					[/* text */ 't', ` of the zip file
 entry and encoded in standard `],
					[/* inline code block */ 'i', `MS-DOS date and time format`],
					[/* text */ 't', `.
 The `],
					[/* reference */ 'r', `java.util.TimeZone#getDefault()`, `default TimeZone`],
					[/* text */ 't', ` is
 used to convert the epoch time to the MS-DOS data and time.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `The last modification time of the entry in milliseconds
         since the epoch`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setTimeLocal(java.time.LocalDateTime)', [
			[/* method description */
				[/* text */ 't', `Sets the last modification time of the entry in local date-time.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the entry is output to a ZIP file or ZIP file formatted
 output stream the last modification time set by this method will
 be stored into the `],
					[/* inline code block */ 'i', `date and time fields`],
					[/* text */ 't', ` of the zip file
 entry and encoded in standard `],
					[/* inline code block */ 'i', `MS-DOS date and time format`],
					[/* text */ 't', `.
 If the date-time set is out of the range of the standard `],
					[/* inline code block */ 'i', `MS-DOS date and time format`],
					[/* text */ 't', `, the time will also be stored into
 zip file entry's extended timestamp fields in `],
					[/* inline code block */ 'i', `optional extra data`],
					[/* text */ 't', ` in UTC time. The `],
					[/* reference */ 'r', `java.time.ZoneId#systemDefault()`, `system default TimeZone`],
					[/* text */ 't', ` is used to convert the local date-time
 to UTC time.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` uses a precision of nanoseconds, whereas
 this class uses a precision of milliseconds. The conversion will
 truncate any excess precision information as though the amount in
 nanoseconds was subject to integer division by one million.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `The last modification time of the entry in local date-time`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
