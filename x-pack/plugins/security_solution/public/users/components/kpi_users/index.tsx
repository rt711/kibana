/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { EuiFlexItem, EuiFlexGroup, EuiSpacer } from '@elastic/eui';

import { UsersKpiProps } from './types';

import { HostsKpiAuthentications } from '../../../hosts/components/kpi_hosts/authentications';
import { TotalUsersKpi } from './total_users';
import { useUserRiskScore } from '../../../risk_score/containers';
import { CallOutSwitcher } from '../../../common/components/callouts';
import * as i18n from './translations';

export const UsersKpiComponent = React.memo<UsersKpiProps>(
  ({ filterQuery, from, indexNames, to, setQuery, skip, narrowDateRange }) => {
    const [_, { isModuleEnabled }] = useUserRiskScore({});

    return (
      <>
        {isModuleEnabled === false && (
          <>
            <CallOutSwitcher
              namespace="users"
              condition
              message={{
                type: 'primary',
                id: 'userRiskModule',
                title: i18n.ENABLE_USER_RISK_TEXT,

                description: (
                  <>
                    {/*
                    TODO PENDING ON USER RISK DOCUMENTATION}
                    <EuiLink href={RISKY_USERS_DOC_LINK} target="_blank"> */}
                    {i18n.LEARN_MORE} {i18n.USER_RISK_DATA}
                    {/* </EuiLink> */}
                    <EuiSpacer />
                  </>
                ),
              }}
            />
            <EuiSpacer size="l" />
          </>
        )}
        <EuiFlexGroup wrap>
          <EuiFlexItem grow={1}>
            <TotalUsersKpi
              filterQuery={filterQuery}
              from={from}
              indexNames={indexNames}
              to={to}
              narrowDateRange={narrowDateRange}
              setQuery={setQuery}
              skip={skip}
            />
          </EuiFlexItem>

          <EuiFlexItem grow={2}>
            <HostsKpiAuthentications
              filterQuery={filterQuery}
              from={from}
              indexNames={indexNames}
              to={to}
              narrowDateRange={narrowDateRange}
              setQuery={setQuery}
              skip={skip}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </>
    );
  }
);

UsersKpiComponent.displayName = 'UsersKpiComponent';
