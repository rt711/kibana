/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export const EXCEPTIONABLE_ENDPOINT_EVENT_FIELDS = [
  '@timestamp',
  'agent.id',
  'agent.name',
  'agent.type',
  'agent.version',
  'data_stream.dataset',
  'data_stream.namespace',
  'data_stream.type',
  'destination.address',
  'destination.bytes',
  'destination.domain',
  'destination.geo.city_name',
  'destination.geo.continent_name',
  'destination.geo.country_iso_code',
  'destination.geo.country_name',
  'destination.geo.location',
  'destination.geo.name',
  'destination.geo.region_iso_code',
  'destination.geo.region_name',
  'destination.ip',
  'destination.packets',
  'destination.port',
  'destination.registered_domain',
  'destination.top_level_domain',
  'dll.code_signature.exists',
  'dll.code_signature.status',
  'dll.code_signature.subject_name',
  'dll.code_signature.trusted',
  'dll.code_signature.valid',
  'dll.Ext',
  'dll.Ext.code_signature',
  'dll.Ext.code_signature.exists',
  'dll.Ext.code_signature.status',
  'dll.Ext.code_signature.subject_name',
  'dll.Ext.code_signature.trusted',
  'dll.Ext.code_signature.valid',
  'dll.Ext.load_index',
  'dll.hash.md5',
  'dll.hash.sha1',
  'dll.hash.sha256',
  'dll.hash.sha512',
  'dll.name',
  'dll.path',
  'dll.pe.company',
  'dll.pe.description',
  'dll.pe.file_version',
  'dll.pe.imphash',
  'dll.pe.original_file_name',
  'dll.pe.product',
  'dns.Ext',
  'dns.Ext.options',
  'dns.Ext.status',
  'dns.question.name',
  'dns.question.registered_domain',
  'dns.question.subdomain',
  'dns.question.top_level_domain',
  'dns.question.type',
  'dns.resolved_ip',
  'ecs.version',
  'elastic.agent',
  'elastic.agent.id',
  'Endpoint.policy',
  'Endpoint.policy.applied',
  'Endpoint.policy.applied.id',
  'Endpoint.policy.applied.name',
  'Endpoint.policy.applied.status',
  'Endpoint.status',
  'event.action',
  'event.category',
  'event.code',
  'event.created',
  'event.dataset',
  'event.Ext',
  'event.Ext.correlation',
  'event.Ext.correlation.id',
  'event.hash',
  'event.id',
  'event.ingested',
  'event.module',
  'event.outcome',
  'event.provider',
  'event.sequence',
  'event.severity',
  'event.type',
  'file.accessed',
  'file.attributes',
  'file.created',
  'file.ctime',
  'file.device',
  'file.directory',
  'file.drive_letter',
  'file.Ext',
  'file.Ext.code_signature',
  'file.Ext.code_signature.exists',
  'file.Ext.code_signature.status',
  'file.Ext.code_signature.subject_name',
  'file.Ext.code_signature.trusted',
  'file.Ext.code_signature.valid',
  'file.Ext.entropy',
  'file.Ext.header_data',
  'file.Ext.monotonic_id',
  'file.Ext.original',
  'file.Ext.original.gid',
  'file.Ext.original.group',
  'file.Ext.original.mode',
  'file.Ext.original.name',
  'file.Ext.original.owner',
  'file.Ext.original.path',
  'file.Ext.original.uid',
  'file.Ext.windows',
  'file.Ext.windows.zone_identifier',
  'file.extension',
  'file.gid',
  'file.group',
  'file.hash.md5',
  'file.hash.sha1',
  'file.hash.sha256',
  'file.hash.sha512',
  'file.inode',
  'file.mime_type',
  'file.mode',
  'file.mtime',
  'file.name',
  'file.owner',
  'file.path',
  'file.path.caseless',
  'file.path.text',
  'file.pe.company',
  'file.pe.description',
  'file.pe.file_version',
  'file.pe.imphash',
  'file.pe.original_file_name',
  'file.pe.product',
  'file.size',
  'file.target_path',
  'file.target_path.caseless',
  'file.target_path.text',
  'file.type',
  'file.uid',
  'group.domain',
  'group.Ext',
  'group.Ext.real',
  'group.Ext.real.id',
  'group.Ext.real.name',
  'group.id',
  'group.name',
  'host.architecture',
  'host.domain',
  'host.hostname',
  'host.id',
  'host.ip',
  'host.mac',
  'host.name',
  'host.os.Ext',
  'host.os.Ext.variant',
  'host.os.family',
  'host.os.full',
  'host.os.full.caseless',
  'host.os.full.text',
  'host.os.kernel',
  'host.os.name',
  'host.os.name.caseless',
  'host.os.name.text',
  'host.os.platform',
  'host.os.version',
  'host.type',
  'host.uptime',
  'http.request.body.bytes',
  'http.request.body.content',
  'http.request.body.content.text',
  'http.request.bytes',
  'http.response.body.bytes',
  'http.response.body.content',
  'http.response.body.content.text',
  'http.response.bytes',
  'http.response.Ext',
  'http.response.Ext.version',
  'http.response.status_code',
  'message',
  'network.bytes',
  'network.community_id',
  'network.direction',
  'network.iana_number',
  'network.packets',
  'network.protocol',
  'network.transport',
  'network.type',
  'package.name',
  'process.args',
  'process.args_count',
  'process.code_signature.exists',
  'process.code_signature.status',
  'process.code_signature.subject_name',
  'process.code_signature.trusted',
  'process.code_signature.valid',
  'process.command_line',
  'process.command_line.caseless',
  'process.command_line.text',
  'process.entity_id',
  'process.executable',
  'process.executable.caseless',
  'process.executable.text',
  'process.exit_code',
  'process.Ext',
  'process.Ext.ancestry',
  'process.Ext.authentication_id',
  'process.Ext.code_signature',
  'process.Ext.code_signature.exists',
  'process.Ext.code_signature.status',
  'process.Ext.code_signature.subject_name',
  'process.Ext.code_signature.trusted',
  'process.Ext.code_signature.valid',
  'process.Ext.defense_evasions',
  'process.Ext.session',
  'process.Ext.token.elevation',
  'process.Ext.token.elevation_type',
  'process.Ext.token.integrity_level_name',
  'process.hash.md5',
  'process.hash.sha1',
  'process.hash.sha256',
  'process.hash.sha512',
  'process.name',
  'process.name.caseless',
  'process.name.text',
  'process.parent.args',
  'process.parent.args_count',
  'process.parent.code_signature.exists',
  'process.parent.code_signature.status',
  'process.parent.code_signature.subject_name',
  'process.parent.code_signature.trusted',
  'process.parent.code_signature.valid',
  'process.parent.command_line',
  'process.parent.command_line.caseless',
  'process.parent.command_line.text',
  'process.parent.entity_id',
  'process.parent.executable',
  'process.parent.executable.caseless',
  'process.parent.executable.text',
  'process.parent.exit_code',
  'process.parent.Ext',
  'process.parent.Ext.code_signature',
  'process.parent.Ext.code_signature.exists',
  'process.parent.Ext.code_signature.status',
  'process.parent.Ext.code_signature.subject_name',
  'process.parent.Ext.code_signature.trusted',
  'process.parent.Ext.code_signature.valid',
  'process.parent.Ext.real',
  'process.parent.Ext.real.pid',
  'process.parent.hash.md5',
  'process.parent.hash.sha1',
  'process.parent.hash.sha256',
  'process.parent.hash.sha512',
  'process.parent.name',
  'process.parent.name.caseless',
  'process.parent.name.text',
  'process.parent.pe.company',
  'process.parent.pe.description',
  'process.parent.pe.file_version',
  'process.parent.pe.imphash',
  'process.parent.pe.original_file_name',
  'process.parent.pe.product',
  'process.parent.pgid',
  'process.parent.pid',
  'process.parent.ppid',
  'process.parent.thread.id',
  'process.parent.thread.name',
  'process.parent.title',
  'process.parent.title.text',
  'process.parent.uptime',
  'process.parent.working_directory',
  'process.parent.working_directory.caseless',
  'process.parent.working_directory.text',
  'process.pe.company',
  'process.pe.description',
  'process.pe.file_version',
  'process.pe.imphash',
  'process.pe.original_file_name',
  'process.pe.product',
  'process.pgid',
  'process.pid',
  'process.ppid',
  'process.thread.id',
  'process.thread.name',
  'process.title',
  'process.title.text',
  'process.uptime',
  'process.working_directory',
  'process.working_directory.caseless',
  'process.working_directory.text',
  'registry.data.bytes',
  'registry.data.strings',
  'registry.hive',
  'registry.key',
  'registry.path',
  'registry.value',
  'source.address',
  'source.bytes',
  'source.domain',
  'source.geo.city_name',
  'source.geo.continent_name',
  'source.geo.country_iso_code',
  'source.geo.country_name',
  'source.geo.location',
  'source.geo.name',
  'source.geo.region_iso_code',
  'source.geo.region_name',
  'source.ip',
  'source.packets',
  'source.port',
  'source.registered_domain',
  'source.top_level_domain',
  'user.domain',
  'user.email',
  'user.Ext',
  'user.Ext.real',
  'user.Ext.real.id',
  'user.Ext.real.name',
  'user.full_name',
  'user.full_name.text',
  'user.group.domain',
  'user.group.Ext',
  'user.group.Ext.real',
  'user.group.Ext.real.id',
  'user.group.Ext.real.name',
  'user.group.id',
  'user.group.name',
  'user.hash',
  'user.id',
  'user.name',
  'user.name.text',
];
