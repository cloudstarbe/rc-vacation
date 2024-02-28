/*
 +-----------------------------------------------------------------------+
 | Vacation Module for RoundCube                                         |
 |                                                                       |
 | Copyright (C) 2009 Boris HUISGEN <bhuisgen@hbis.fr>                   |
 | Licensed under the GNU GPL                                            |
 +-----------------------------------------------------------------------+
 */

if (window.rcmail) {
	rcmail.addEventListener('init', function(evt) {
		rcmail.register_command('plugin.vacation-save', function() {
			rcmail.gui_objects.vacationform.submit();
		}, true);
	})
}
