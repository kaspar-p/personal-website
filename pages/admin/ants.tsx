import React, { useCallback, useEffect, useState } from "react";
import exact from "prop-types-exact";
import {
  Button,
  Card,
  Divider,
  Paper,
  Stack,
  Grid,
  Typography,
} from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

import UnauthenticatedPage from "../../components/pages/Unauthenticated";
import LoadingPage from "../../components/pages/LoadingPage";
import AdminPageTemplate from "../../components/AdminPageTemplate";
import { Check, Close } from "@mui/icons-material";

interface AntData {
  ant: string;
  issueNumber: string;
}

type IssueFunctionType = (antData: AntData) => void;

interface AllIssuesFeedPropTypes {
  options: AntData[];
  acceptIssue: IssueFunctionType;
  rejectIssue: IssueFunctionType;
}

function AllIssuesFeed(props: AllIssuesFeedPropTypes) {
  return (
    <IssuesFeed
      title="all issues"
      showButtons={true}
      options={props.options}
      acceptIssue={props.acceptIssue}
      rejectIssue={props.rejectIssue}
    />
  );
}

interface SelectedIssuesFeedPropTypes {
  options: AntData[];
}

function SelectedIssuesFeed(props: SelectedIssuesFeedPropTypes) {
  return (
    <IssuesFeed
      title="selected issues"
      showButtons={false}
      options={props.options}
    />
  );
}

interface IssueOptionPropTypes {
  antData: AntData;
  showButtons: boolean;
  acceptIssue?: IssueFunctionType;
  rejectIssue?: IssueFunctionType;
}

function IssueOption(props: IssueOptionPropTypes) {
  const { antData, showButtons } = props;

  return (
    <Card variant="outlined">
      <Grid container alignItems="center" sx={{ paddingY: "5px" }}>
        <Grid item xs>
          <Typography variant="h6" sx={{ paddingX: "30px", textAlign: "left" }}>
            {antData.ant}
          </Typography>
        </Grid>
        {showButtons && props.acceptIssue && props.rejectIssue ? (
          <Grid
            item
            xs={4}
            container
            spacing={1}
            direction="row"
            sx={{ padding: "2px" }}
          >
            <Grid item>
              <Button
                variant="outlined"
                onClick={() => {
                  if (props.acceptIssue) {
                    props.acceptIssue(antData);
                  }
                }}
              >
                <Check sx={{ color: "green" }} />
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={() => {
                  if (props.rejectIssue) {
                    props.rejectIssue(antData);
                  }
                }}
              >
                <Close sx={{ color: "red" }} />
              </Button>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </Card>
  );
}

interface IssuesFeedPropTypes {
  title: string;
  showButtons: boolean;
  options: AntData[];
  acceptIssue?: IssueFunctionType;
  rejectIssue?: IssueFunctionType;
}

function IssuesFeed(props: IssuesFeedPropTypes) {
  const { title, showButtons, options } = props;

  return (
    <Paper
      variant="outlined"
      sx={{ width: "45%", height: "80vh", overflowY: "scroll" }}
    >
      <Typography variant="h4" sx={{ paddingY: "10px" }}>
        {title} ({options.length})
      </Typography>
      <Divider />
      <Stack spacing={1} sx={{ padding: "5px" }}>
        {options.map((antData) => (
          <IssueOption
            key={antData.issueNumber}
            antData={antData}
            showButtons={showButtons}
            acceptIssue={props.acceptIssue}
            rejectIssue={props.rejectIssue}
          />
        ))}
      </Stack>
    </Paper>
  );
}

const propTypes = {};

function AdminAntsPage() {
  const { data: session, status } = useSession();
  // Raw issues are the Github ones. They are NOT meant to change!
  const [rawIssues] = useState<AntData[]>([
    { ant: "some ant", issueNumber: "101" },
    {
      ant: "some ant that has a really long name that might wrap off the edge?",
      issueNumber: "100",
    },
  ]);
  const [allIssues, setAllIssues] = useState<AntData[]>([]);
  const [selectedIssues, setSelectedIssues] = useState<AntData[]>([]);

  useEffect(() => {
    setAllIssues(rawIssues.slice());
    setSelectedIssues([]);
  }, [rawIssues]);

  const acceptIssue: IssueFunctionType = useCallback(
    (antData: AntData) => {
      // Remove the antData from allIssues
      const index = allIssues.findIndex(
        ({ issueNumber }) => issueNumber === antData.issueNumber
      );
      if (index < 0) {
        console.log("Index was invalid! this should never happen!");
        return;
      }
      const newAllIssues = allIssues.slice();
      newAllIssues.splice(index, 1);
      setAllIssues(newAllIssues);

      // Add the antData to selectedIssues
      const newSelectedIssues = [...selectedIssues, antData];
      setSelectedIssues(newSelectedIssues);
    },
    [allIssues, selectedIssues, rawIssues]
  );

  const rejectIssue: IssueFunctionType = useCallback(
    (antData: AntData) => {
      console.log("Rejected: ", antData);
    },
    [allIssues, selectedIssues, rawIssues]
  );

  if (status === "loading") {
    return <LoadingPage />;
  } else if (status === "unauthenticated") {
    return <UnauthenticatedPage />;
  }

  return (
    <AdminPageTemplate title="typesofants.org">
      <Stack direction="row" spacing={5} justifyContent="center">
        <AllIssuesFeed
          options={allIssues}
          acceptIssue={acceptIssue}
          rejectIssue={rejectIssue}
        />
        <SelectedIssuesFeed options={selectedIssues} />
      </Stack>
    </AdminPageTemplate>
  );
}

AdminAntsPage.propTypes = exact(propTypes);

export default AdminAntsPage;
