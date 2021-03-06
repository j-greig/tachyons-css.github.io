"use strict";

// This is a generated file, modify: generate/templates/templates/nodegit.js

var _ = require("lodash");
var promisify = require("promisify-node");
var rawApi;

// Attempt to load the production release first, if it fails fall back to the
// debug release.
try {
  rawApi = require("../build/Release/nodegit.node");
} catch (ex) {
  /* istanbul ignore next */
  if (ex.code !== "MODULE_NOT_FOUND") {
    throw ex;
  }

  rawApi = require("../build/Debug/nodegit.node");
}

// For disccussion on why `cloneDeep` is required, see:
// https://github.com/facebook/jest/issues/3552
// https://github.com/facebook/jest/issues/3550
// https://github.com/nodejs/node/issues/5016
rawApi = _.cloneDeep(rawApi);

// Native methods do not return an identifiable function, so we
// have to override them here
/* jshint ignore:start */
var _AnnotatedCommit = rawApi.AnnotatedCommit;

var _AnnotatedCommit_fromFetchhead = _AnnotatedCommit.fromFetchhead;
_AnnotatedCommit.fromFetchhead = promisify(_AnnotatedCommit_fromFetchhead);

var _AnnotatedCommit_fromRef = _AnnotatedCommit.fromRef;
_AnnotatedCommit.fromRef = promisify(_AnnotatedCommit_fromRef);

var _AnnotatedCommit_fromRevspec = _AnnotatedCommit.fromRevspec;
_AnnotatedCommit.fromRevspec = promisify(_AnnotatedCommit_fromRevspec);

var _AnnotatedCommit_lookup = _AnnotatedCommit.lookup;
_AnnotatedCommit.lookup = promisify(_AnnotatedCommit_lookup);

var _Attr = rawApi.Attr;

var _Attr_get = _Attr.get;
_Attr.get = promisify(_Attr_get);

var _Blame = rawApi.Blame;

var _Blame_buffer = _Blame.prototype.buffer;
_Blame.prototype.buffer = promisify(_Blame_buffer);

var _Blame_file = _Blame.file;
_Blame.file = promisify(_Blame_file);

var _Blob = rawApi.Blob;

var _Blob_createFromBuffer = _Blob.createFromBuffer;
_Blob.createFromBuffer = promisify(_Blob_createFromBuffer);

var _Blob_createFromDisk = _Blob.createFromDisk;
_Blob.createFromDisk = promisify(_Blob_createFromDisk);

var _Blob_createFromStream = _Blob.createFromStream;
_Blob.createFromStream = promisify(_Blob_createFromStream);

var _Blob_createFromstreamCommit = _Blob.createFromstreamCommit;
_Blob.createFromstreamCommit = promisify(_Blob_createFromstreamCommit);

var _Blob_createFromWorkdir = _Blob.createFromWorkdir;
_Blob.createFromWorkdir = promisify(_Blob_createFromWorkdir);

var _Blob_dup = _Blob.prototype.dup;
_Blob.prototype.dup = promisify(_Blob_dup);

var _Blob_filteredContent = _Blob.filteredContent;
_Blob.filteredContent = promisify(_Blob_filteredContent);

var _Blob_lookup = _Blob.lookup;
_Blob.lookup = promisify(_Blob_lookup);

var _Blob_lookupPrefix = _Blob.lookupPrefix;
_Blob.lookupPrefix = promisify(_Blob_lookupPrefix);

var _Branch = rawApi.Branch;

var _Branch_create = _Branch.create;
_Branch.create = promisify(_Branch_create);

var _Branch_createFromAnnotated = _Branch.createFromAnnotated;
_Branch.createFromAnnotated = promisify(_Branch_createFromAnnotated);

var _Branch_iteratorNew = _Branch.iteratorNew;
_Branch.iteratorNew = promisify(_Branch_iteratorNew);

var _Branch_lookup = _Branch.lookup;
_Branch.lookup = promisify(_Branch_lookup);

var _Branch_move = _Branch.move;
_Branch.move = promisify(_Branch_move);

var _Branch_name = _Branch.name;
_Branch.name = promisify(_Branch_name);

var _Branch_setUpstream = _Branch.setUpstream;
_Branch.setUpstream = promisify(_Branch_setUpstream);

var _Branch_remoteName = _Branch.remoteName;
_Branch.remoteName = promisify(_Branch_remoteName);

var _Branch_upstream = _Branch.upstream;
_Branch.upstream = promisify(_Branch_upstream);

var _Buf = rawApi.Buf;

var _Buf_grow = _Buf.prototype.grow;
_Buf.prototype.grow = promisify(_Buf_grow);

var _Buf_set = _Buf.prototype.set;
_Buf.prototype.set = promisify(_Buf_set);

var _Checkout = rawApi.Checkout;

var _Checkout_head = _Checkout.head;
_Checkout.head = promisify(_Checkout_head);

var _Checkout_index = _Checkout.index;
_Checkout.index = promisify(_Checkout_index);

var _Checkout_tree = _Checkout.tree;
_Checkout.tree = promisify(_Checkout_tree);

var _Cherrypick = rawApi.Cherrypick;

var _Cherrypick_cherrypick = _Cherrypick.cherrypick;
_Cherrypick.cherrypick = promisify(_Cherrypick_cherrypick);

var _Cherrypick_commit = _Cherrypick.commit;
_Cherrypick.commit = promisify(_Cherrypick_commit);

var _Clone = rawApi.Clone;

var _Clone_clone = _Clone.clone;
_Clone.clone = promisify(_Clone_clone);

var _Commit = rawApi.Commit;

var _Commit_amend = _Commit.prototype.amend;
_Commit.prototype.amend = promisify(_Commit_amend);

var _Commit_create = _Commit.create;
_Commit.create = promisify(_Commit_create);

var _Commit_createWithSignature = _Commit.createWithSignature;
_Commit.createWithSignature = promisify(_Commit_createWithSignature);

var _Commit_dup = _Commit.prototype.dup;
_Commit.prototype.dup = promisify(_Commit_dup);

var _Commit_headerField = _Commit.prototype.headerField;
_Commit.prototype.headerField = promisify(_Commit_headerField);

var _Commit_lookup = _Commit.lookup;
_Commit.lookup = promisify(_Commit_lookup);

var _Commit_lookupPrefix = _Commit.lookupPrefix;
_Commit.lookupPrefix = promisify(_Commit_lookupPrefix);

var _Commit_nthGenAncestor = _Commit.prototype.nthGenAncestor;
_Commit.prototype.nthGenAncestor = promisify(_Commit_nthGenAncestor);

var _Commit_parent = _Commit.prototype.parent;
_Commit.prototype.parent = promisify(_Commit_parent);

var _Config = rawApi.Config;

var _Config_findProgramdata = _Config.findProgramdata;
_Config.findProgramdata = promisify(_Config_findProgramdata);

var _Config_getStringBuf = _Config.prototype.getStringBuf;
_Config.prototype.getStringBuf = promisify(_Config_getStringBuf);

var _Config_openDefault = _Config.openDefault;
_Config.openDefault = promisify(_Config_openDefault);

var _Config_setString = _Config.prototype.setString;
_Config.prototype.setString = promisify(_Config_setString);

var _Config_snapshot = _Config.prototype.snapshot;
_Config.prototype.snapshot = promisify(_Config_snapshot);

var _Cred = rawApi.Cred;

var _Cred_sshKeyMemoryNew = _Cred.sshKeyMemoryNew;
_Cred.sshKeyMemoryNew = promisify(_Cred_sshKeyMemoryNew);

var _Cred_usernameNew = _Cred.usernameNew;
_Cred.usernameNew = promisify(_Cred_usernameNew);

var _Diff = rawApi.Diff;

var _Diff_blobToBuffer = _Diff.blobToBuffer;
_Diff.blobToBuffer = promisify(_Diff_blobToBuffer);

var _Diff_findSimilar = _Diff.prototype.findSimilar;
_Diff.prototype.findSimilar = promisify(_Diff_findSimilar);

var _Diff_fromBuffer = _Diff.fromBuffer;
_Diff.fromBuffer = promisify(_Diff_fromBuffer);

var _Diff_getPerfdata = _Diff.prototype.getPerfdata;
_Diff.prototype.getPerfdata = promisify(_Diff_getPerfdata);

var _Diff_indexToIndex = _Diff.indexToIndex;
_Diff.indexToIndex = promisify(_Diff_indexToIndex);

var _Diff_indexToWorkdir = _Diff.indexToWorkdir;
_Diff.indexToWorkdir = promisify(_Diff_indexToWorkdir);

var _Diff_merge = _Diff.prototype.merge;
_Diff.prototype.merge = promisify(_Diff_merge);

var _Diff_toBuf = _Diff.prototype.toBuf;
_Diff.prototype.toBuf = promisify(_Diff_toBuf);

var _Diff_treeToIndex = _Diff.treeToIndex;
_Diff.treeToIndex = promisify(_Diff_treeToIndex);

var _Diff_treeToTree = _Diff.treeToTree;
_Diff.treeToTree = promisify(_Diff_treeToTree);

var _Diff_treeToWorkdir = _Diff.treeToWorkdir;
_Diff.treeToWorkdir = promisify(_Diff_treeToWorkdir);

var _Diff_treeToWorkdirWithIndex = _Diff.treeToWorkdirWithIndex;
_Diff.treeToWorkdirWithIndex = promisify(_Diff_treeToWorkdirWithIndex);

var _Fetch = rawApi.Fetch;
var _Filter = rawApi.Filter;

var _Filter_applyToBlob = _Filter.prototype.applyToBlob;
_Filter.prototype.applyToBlob = promisify(_Filter_applyToBlob);

var _Filter_applyToData = _Filter.prototype.applyToData;
_Filter.prototype.applyToData = promisify(_Filter_applyToData);

var _Filter_applyToFile = _Filter.prototype.applyToFile;
_Filter.prototype.applyToFile = promisify(_Filter_applyToFile);

var _Filter_load = _Filter.load;
_Filter.load = promisify(_Filter_load);

var _FilterList = rawApi.FilterList;

var _FilterList_applyToBlob = _FilterList.prototype.applyToBlob;
_FilterList.prototype.applyToBlob = promisify(_FilterList_applyToBlob);

var _FilterList_applyToData = _FilterList.prototype.applyToData;
_FilterList.prototype.applyToData = promisify(_FilterList_applyToData);

var _FilterList_applyToFile = _FilterList.prototype.applyToFile;
_FilterList.prototype.applyToFile = promisify(_FilterList_applyToFile);

var _FilterList_load = _FilterList.load;
_FilterList.load = promisify(_FilterList_load);

var _FilterSource = rawApi.FilterSource;
var _Giterr = rawApi.Giterr;
var _Graph = rawApi.Graph;

var _Graph_aheadBehind = _Graph.aheadBehind;
_Graph.aheadBehind = promisify(_Graph_aheadBehind);

var _Graph_descendantOf = _Graph.descendantOf;
_Graph.descendantOf = promisify(_Graph_descendantOf);

var _Hashsig = rawApi.Hashsig;

var _Hashsig_create = _Hashsig.create;
_Hashsig.create = promisify(_Hashsig_create);

var _Hashsig_createFromFile = _Hashsig.createFromFile;
_Hashsig.createFromFile = promisify(_Hashsig_createFromFile);

var _Ignore = rawApi.Ignore;

var _Ignore_pathIsIgnored = _Ignore.pathIsIgnored;
_Ignore.pathIsIgnored = promisify(_Ignore_pathIsIgnored);

var _Index = rawApi.Index;

var _Index_add = _Index.prototype.add;
_Index.prototype.add = promisify(_Index_add);

var _Index_addAll = _Index.prototype.addAll;
_Index.prototype.addAll = promisify(_Index_addAll);

var _Index_addByPath = _Index.prototype.addByPath;
_Index.prototype.addByPath = promisify(_Index_addByPath);

var _Index_clear = _Index.prototype.clear;
_Index.prototype.clear = promisify(_Index_clear);

var _Index_conflictAdd = _Index.prototype.conflictAdd;
_Index.prototype.conflictAdd = promisify(_Index_conflictAdd);

var _Index_conflictCleanup = _Index.prototype.conflictCleanup;
_Index.prototype.conflictCleanup = promisify(_Index_conflictCleanup);

var _Index_conflictGet = _Index.prototype.conflictGet;
_Index.prototype.conflictGet = promisify(_Index_conflictGet);

var _Index_conflictRemove = _Index.prototype.conflictRemove;
_Index.prototype.conflictRemove = promisify(_Index_conflictRemove);

var _Index_find = _Index.prototype.find;
_Index.prototype.find = promisify(_Index_find);

var _Index_findPrefix = _Index.prototype.findPrefix;
_Index.prototype.findPrefix = promisify(_Index_findPrefix);

var _Index_open = _Index.open;
_Index.open = promisify(_Index_open);

var _Index_read = _Index.prototype.read;
_Index.prototype.read = promisify(_Index_read);

var _Index_readTree = _Index.prototype.readTree;
_Index.prototype.readTree = promisify(_Index_readTree);

var _Index_remove = _Index.prototype.remove;
_Index.prototype.remove = promisify(_Index_remove);

var _Index_removeAll = _Index.prototype.removeAll;
_Index.prototype.removeAll = promisify(_Index_removeAll);

var _Index_removeByPath = _Index.prototype.removeByPath;
_Index.prototype.removeByPath = promisify(_Index_removeByPath);

var _Index_removeDirectory = _Index.prototype.removeDirectory;
_Index.prototype.removeDirectory = promisify(_Index_removeDirectory);

var _Index_updateAll = _Index.prototype.updateAll;
_Index.prototype.updateAll = promisify(_Index_updateAll);

var _Index_write = _Index.prototype.write;
_Index.prototype.write = promisify(_Index_write);

var _Index_writeTree = _Index.prototype.writeTree;
_Index.prototype.writeTree = promisify(_Index_writeTree);

var _Index_writeTreeTo = _Index.prototype.writeTreeTo;
_Index.prototype.writeTreeTo = promisify(_Index_writeTreeTo);

var _Indexer = rawApi.Indexer;
var _Libgit2 = rawApi.Libgit2;
var _Merge = rawApi.Merge;

var _Merge_merge = _Merge.merge;
_Merge.merge = promisify(_Merge_merge);

var _Merge_base = _Merge.base;
_Merge.base = promisify(_Merge_base);

var _Merge_bases = _Merge.bases;
_Merge.bases = promisify(_Merge_bases);

var _Merge_commits = _Merge.commits;
_Merge.commits = promisify(_Merge_commits);

var _Merge_trees = _Merge.trees;
_Merge.trees = promisify(_Merge_trees);

var _Note = rawApi.Note;

var _Note_create = _Note.create;
_Note.create = promisify(_Note_create);

var _Note_foreach = _Note.foreach;
_Note.foreach = promisify(_Note_foreach);

var _Note_iteratorNew = _Note.iteratorNew;
_Note.iteratorNew = promisify(_Note_iteratorNew);

var _Note_read = _Note.read;
_Note.read = promisify(_Note_read);

var _Note_remove = _Note.remove;
_Note.remove = promisify(_Note_remove);

var _Object = rawApi.Object;

var _Object_dup = _Object.prototype.dup;
_Object.prototype.dup = promisify(_Object_dup);

var _Object_lookup = _Object.lookup;
_Object.lookup = promisify(_Object_lookup);

var _Object_lookupByPath = _Object.prototype.lookupByPath;
_Object.prototype.lookupByPath = promisify(_Object_lookupByPath);

var _Object_lookupPrefix = _Object.lookupPrefix;
_Object.lookupPrefix = promisify(_Object_lookupPrefix);

var _Object_peel = _Object.prototype.peel;
_Object.prototype.peel = promisify(_Object_peel);

var _Object_shortId = _Object.prototype.shortId;
_Object.prototype.shortId = promisify(_Object_shortId);

var _Odb = rawApi.Odb;

var _Odb_open = _Odb.open;
_Odb.open = promisify(_Odb_open);

var _Odb_read = _Odb.prototype.read;
_Odb.prototype.read = promisify(_Odb_read);

var _Odb_write = _Odb.prototype.write;
_Odb.prototype.write = promisify(_Odb_write);

var _OdbObject = rawApi.OdbObject;

var _OdbObject_dup = _OdbObject.prototype.dup;
_OdbObject.prototype.dup = promisify(_OdbObject_dup);

var _Oid = rawApi.Oid;
var _Oidarray = rawApi.Oidarray;
var _Openssl = rawApi.Openssl;
var _Packbuilder = rawApi.Packbuilder;
var _Patch = rawApi.Patch;

var _Patch_fromBlobAndBuffer = _Patch.fromBlobAndBuffer;
_Patch.fromBlobAndBuffer = promisify(_Patch_fromBlobAndBuffer);

var _Patch_fromBlobs = _Patch.fromBlobs;
_Patch.fromBlobs = promisify(_Patch_fromBlobs);

var _Patch_fromDiff = _Patch.fromDiff;
_Patch.fromDiff = promisify(_Patch_fromDiff);

var _Patch_getHunk = _Patch.prototype.getHunk;
_Patch.prototype.getHunk = promisify(_Patch_getHunk);

var _Patch_getLineInHunk = _Patch.prototype.getLineInHunk;
_Patch.prototype.getLineInHunk = promisify(_Patch_getLineInHunk);

var _Patch_convenientFromDiff = _Patch.convenientFromDiff;
_Patch.convenientFromDiff = promisify(_Patch_convenientFromDiff);

var _Pathspec = rawApi.Pathspec;

var _Pathspec_matchDiff = _Pathspec.prototype.matchDiff;
_Pathspec.prototype.matchDiff = promisify(_Pathspec_matchDiff);

var _Pathspec_matchIndex = _Pathspec.prototype.matchIndex;
_Pathspec.prototype.matchIndex = promisify(_Pathspec_matchIndex);

var _Pathspec_matchTree = _Pathspec.prototype.matchTree;
_Pathspec.prototype.matchTree = promisify(_Pathspec_matchTree);

var _Pathspec_matchWorkdir = _Pathspec.prototype.matchWorkdir;
_Pathspec.prototype.matchWorkdir = promisify(_Pathspec_matchWorkdir);

var _Proxy = rawApi.Proxy;
var _Push = rawApi.Push;
var _Rebase = rawApi.Rebase;

var _Rebase_abort = _Rebase.prototype.abort;
_Rebase.prototype.abort = promisify(_Rebase_abort);

var _Rebase_commit = _Rebase.prototype.commit;
_Rebase.prototype.commit = promisify(_Rebase_commit);

var _Rebase_init = _Rebase.init;
_Rebase.init = promisify(_Rebase_init);

var _Rebase_next = _Rebase.prototype.next;
_Rebase.prototype.next = promisify(_Rebase_next);

var _Rebase_open = _Rebase.open;
_Rebase.open = promisify(_Rebase_open);

var _Refdb = rawApi.Refdb;

var _Refdb_open = _Refdb.open;
_Refdb.open = promisify(_Refdb_open);

var _Reference = rawApi.Reference;

var _Reference_create = _Reference.create;
_Reference.create = promisify(_Reference_create);

var _Reference_createMatching = _Reference.createMatching;
_Reference.createMatching = promisify(_Reference_createMatching);

var _Reference_dup = _Reference.prototype.dup;
_Reference.prototype.dup = promisify(_Reference_dup);

var _Reference_dwim = _Reference.dwim;
_Reference.dwim = promisify(_Reference_dwim);

var _Reference_list = _Reference.list;
_Reference.list = promisify(_Reference_list);

var _Reference_lookup = _Reference.lookup;
_Reference.lookup = promisify(_Reference_lookup);

var _Reference_nameToId = _Reference.nameToId;
_Reference.nameToId = promisify(_Reference_nameToId);

var _Reference_peel = _Reference.prototype.peel;
_Reference.prototype.peel = promisify(_Reference_peel);

var _Reference_rename = _Reference.prototype.rename;
_Reference.prototype.rename = promisify(_Reference_rename);

var _Reference_resolve = _Reference.prototype.resolve;
_Reference.prototype.resolve = promisify(_Reference_resolve);

var _Reference_setTarget = _Reference.prototype.setTarget;
_Reference.prototype.setTarget = promisify(_Reference_setTarget);

var _Reference_symbolicCreate = _Reference.symbolicCreate;
_Reference.symbolicCreate = promisify(_Reference_symbolicCreate);

var _Reference_symbolicCreateMatching = _Reference.symbolicCreateMatching;
_Reference.symbolicCreateMatching = promisify(_Reference_symbolicCreateMatching);

var _Reference_symbolicSetTarget = _Reference.prototype.symbolicSetTarget;
_Reference.prototype.symbolicSetTarget = promisify(_Reference_symbolicSetTarget);

var _Reflog = rawApi.Reflog;

var _Reflog_read = _Reflog.read;
_Reflog.read = promisify(_Reflog_read);

var _Reflog_write = _Reflog.prototype.write;
_Reflog.prototype.write = promisify(_Reflog_write);

var _ReflogEntry = rawApi.ReflogEntry;
var _Refspec = rawApi.Refspec;
var _Remote = rawApi.Remote;

var _Remote_connect = _Remote.prototype.connect;
_Remote.prototype.connect = promisify(_Remote_connect);

var _Remote_create = _Remote.create;
_Remote.create = promisify(_Remote_create);

var _Remote_createAnonymous = _Remote.createAnonymous;
_Remote.createAnonymous = promisify(_Remote_createAnonymous);

var _Remote_createWithFetchspec = _Remote.createWithFetchspec;
_Remote.createWithFetchspec = promisify(_Remote_createWithFetchspec);

var _Remote_defaultBranch = _Remote.prototype.defaultBranch;
_Remote.prototype.defaultBranch = promisify(_Remote_defaultBranch);

var _Remote_delete = _Remote.delete;
_Remote.delete = promisify(_Remote_delete);

var _Remote_disconnect = _Remote.prototype.disconnect;
_Remote.prototype.disconnect = promisify(_Remote_disconnect);

var _Remote_download = _Remote.prototype.download;
_Remote.prototype.download = promisify(_Remote_download);

var _Remote_dup = _Remote.prototype.dup;
_Remote.prototype.dup = promisify(_Remote_dup);

var _Remote_fetch = _Remote.prototype.fetch;
_Remote.prototype.fetch = promisify(_Remote_fetch);

var _Remote_getFetchRefspecs = _Remote.prototype.getFetchRefspecs;
_Remote.prototype.getFetchRefspecs = promisify(_Remote_getFetchRefspecs);

var _Remote_getPushRefspecs = _Remote.prototype.getPushRefspecs;
_Remote.prototype.getPushRefspecs = promisify(_Remote_getPushRefspecs);

var _Remote_list = _Remote.list;
_Remote.list = promisify(_Remote_list);

var _Remote_lookup = _Remote.lookup;
_Remote.lookup = promisify(_Remote_lookup);

var _Remote_push = _Remote.prototype.push;
_Remote.prototype.push = promisify(_Remote_push);

var _Remote_referenceList = _Remote.prototype.referenceList;
_Remote.prototype.referenceList = promisify(_Remote_referenceList);

var _Repository = rawApi.Repository;

var _Repository_config = _Repository.prototype.config;
_Repository.prototype.config = promisify(_Repository_config);

var _Repository_configSnapshot = _Repository.prototype.configSnapshot;
_Repository.prototype.configSnapshot = promisify(_Repository_configSnapshot);

var _Repository_discover = _Repository.discover;
_Repository.discover = promisify(_Repository_discover);

var _Repository_fetchheadForeach = _Repository.prototype.fetchheadForeach;
_Repository.prototype.fetchheadForeach = promisify(_Repository_fetchheadForeach);

var _Repository_head = _Repository.prototype.head;
_Repository.prototype.head = promisify(_Repository_head);

var _Repository_index = _Repository.prototype.index;
_Repository.prototype.index = promisify(_Repository_index);

var _Repository_init = _Repository.init;
_Repository.init = promisify(_Repository_init);

var _Repository_initExt = _Repository.initExt;
_Repository.initExt = promisify(_Repository_initExt);

var _Repository_mergeheadForeach = _Repository.prototype.mergeheadForeach;
_Repository.prototype.mergeheadForeach = promisify(_Repository_mergeheadForeach);

var _Repository_odb = _Repository.prototype.odb;
_Repository.prototype.odb = promisify(_Repository_odb);

var _Repository_open = _Repository.open;
_Repository.open = promisify(_Repository_open);

var _Repository_openBare = _Repository.openBare;
_Repository.openBare = promisify(_Repository_openBare);

var _Repository_openExt = _Repository.openExt;
_Repository.openExt = promisify(_Repository_openExt);

var _Repository_refdb = _Repository.prototype.refdb;
_Repository.prototype.refdb = promisify(_Repository_refdb);

var _Repository_setHead = _Repository.prototype.setHead;
_Repository.prototype.setHead = promisify(_Repository_setHead);

var _Repository_wrapOdb = _Repository.wrapOdb;
_Repository.wrapOdb = promisify(_Repository_wrapOdb);

var _Reset = rawApi.Reset;

var _Reset_reset = _Reset.reset;
_Reset.reset = promisify(_Reset_reset);

var _Reset_default = _Reset.default;
_Reset.default = promisify(_Reset_default);

var _Reset_fromAnnotated = _Reset.fromAnnotated;
_Reset.fromAnnotated = promisify(_Reset_fromAnnotated);

var _Revert = rawApi.Revert;

var _Revert_revert = _Revert.revert;
_Revert.revert = promisify(_Revert_revert);

var _Revert_commit = _Revert.commit;
_Revert.commit = promisify(_Revert_commit);

var _Revparse = rawApi.Revparse;

var _Revparse_single = _Revparse.single;
_Revparse.single = promisify(_Revparse_single);

var _Revwalk = rawApi.Revwalk;

var _Revwalk_next = _Revwalk.prototype.next;
_Revwalk.prototype.next = promisify(_Revwalk_next);

var _Revwalk_fastWalk = _Revwalk.prototype.fastWalk;
_Revwalk.prototype.fastWalk = promisify(_Revwalk_fastWalk);

var _Revwalk_fileHistoryWalk = _Revwalk.prototype.fileHistoryWalk;
_Revwalk.prototype.fileHistoryWalk = promisify(_Revwalk_fileHistoryWalk);

var _Signature = rawApi.Signature;

var _Signature_dup = _Signature.prototype.dup;
_Signature.prototype.dup = promisify(_Signature_dup);

var _Signature_fromBuffer = _Signature.fromBuffer;
_Signature.fromBuffer = promisify(_Signature_fromBuffer);

var _Stash = rawApi.Stash;

var _Stash_apply = _Stash.apply;
_Stash.apply = promisify(_Stash_apply);

var _Stash_drop = _Stash.drop;
_Stash.drop = promisify(_Stash_drop);

var _Stash_foreach = _Stash.foreach;
_Stash.foreach = promisify(_Stash_foreach);

var _Stash_pop = _Stash.pop;
_Stash.pop = promisify(_Stash_pop);

var _Stash_save = _Stash.save;
_Stash.save = promisify(_Stash_save);

var _Status = rawApi.Status;

var _Status_file = _Status.file;
_Status.file = promisify(_Status_file);

var _Status_foreach = _Status.foreach;
_Status.foreach = promisify(_Status_foreach);

var _Status_foreachExt = _Status.foreachExt;
_Status.foreachExt = promisify(_Status_foreachExt);

var _StatusList = rawApi.StatusList;

var _StatusList_getPerfdata = _StatusList.prototype.getPerfdata;
_StatusList.prototype.getPerfdata = promisify(_StatusList_getPerfdata);

var _StatusList_create = _StatusList.create;
_StatusList.create = promisify(_StatusList_create);

var _Strarray = rawApi.Strarray;
var _Submodule = rawApi.Submodule;

var _Submodule_addFinalize = _Submodule.prototype.addFinalize;
_Submodule.prototype.addFinalize = promisify(_Submodule_addFinalize);

var _Submodule_addSetup = _Submodule.addSetup;
_Submodule.addSetup = promisify(_Submodule_addSetup);

var _Submodule_addToIndex = _Submodule.prototype.addToIndex;
_Submodule.prototype.addToIndex = promisify(_Submodule_addToIndex);

var _Submodule_foreach = _Submodule.foreach;
_Submodule.foreach = promisify(_Submodule_foreach);

var _Submodule_init = _Submodule.prototype.init;
_Submodule.prototype.init = promisify(_Submodule_init);

var _Submodule_location = _Submodule.prototype.location;
_Submodule.prototype.location = promisify(_Submodule_location);

var _Submodule_lookup = _Submodule.lookup;
_Submodule.lookup = promisify(_Submodule_lookup);

var _Submodule_open = _Submodule.prototype.open;
_Submodule.prototype.open = promisify(_Submodule_open);

var _Submodule_repoInit = _Submodule.prototype.repoInit;
_Submodule.prototype.repoInit = promisify(_Submodule_repoInit);

var _Submodule_resolveUrl = _Submodule.resolveUrl;
_Submodule.resolveUrl = promisify(_Submodule_resolveUrl);

var _Submodule_setIgnore = _Submodule.setIgnore;
_Submodule.setIgnore = promisify(_Submodule_setIgnore);

var _Submodule_setUpdate = _Submodule.setUpdate;
_Submodule.setUpdate = promisify(_Submodule_setUpdate);

var _Submodule_setUrl = _Submodule.setUrl;
_Submodule.setUrl = promisify(_Submodule_setUrl);

var _Submodule_status = _Submodule.status;
_Submodule.status = promisify(_Submodule_status);

var _Submodule_sync = _Submodule.prototype.sync;
_Submodule.prototype.sync = promisify(_Submodule_sync);

var _Submodule_update = _Submodule.prototype.update;
_Submodule.prototype.update = promisify(_Submodule_update);

var _Tag = rawApi.Tag;

var _Tag_annotationCreate = _Tag.annotationCreate;
_Tag.annotationCreate = promisify(_Tag_annotationCreate);

var _Tag_create = _Tag.create;
_Tag.create = promisify(_Tag_create);

var _Tag_createLightweight = _Tag.createLightweight;
_Tag.createLightweight = promisify(_Tag_createLightweight);

var _Tag_delete = _Tag.delete;
_Tag.delete = promisify(_Tag_delete);

var _Tag_dup = _Tag.prototype.dup;
_Tag.prototype.dup = promisify(_Tag_dup);

var _Tag_list = _Tag.list;
_Tag.list = promisify(_Tag_list);

var _Tag_lookup = _Tag.lookup;
_Tag.lookup = promisify(_Tag_lookup);

var _Tag_lookupPrefix = _Tag.lookupPrefix;
_Tag.lookupPrefix = promisify(_Tag_lookupPrefix);

var _Tag_peel = _Tag.prototype.peel;
_Tag.prototype.peel = promisify(_Tag_peel);

var _Time = rawApi.Time;
var _Transport = rawApi.Transport;

var _Transport_sshWithPaths = _Transport.sshWithPaths;
_Transport.sshWithPaths = promisify(_Transport_sshWithPaths);

var _Tree = rawApi.Tree;

var _Tree_createUpdated = _Tree.prototype.createUpdated;
_Tree.prototype.createUpdated = promisify(_Tree_createUpdated);

var _Tree_dup = _Tree.prototype.dup;
_Tree.prototype.dup = promisify(_Tree_dup);

var _Tree_entryByPath = _Tree.prototype.entryByPath;
_Tree.prototype.entryByPath = promisify(_Tree_entryByPath);

var _Tree_lookup = _Tree.lookup;
_Tree.lookup = promisify(_Tree_lookup);

var _Tree_lookupPrefix = _Tree.lookupPrefix;
_Tree.lookupPrefix = promisify(_Tree_lookupPrefix);

var _TreeEntry = rawApi.TreeEntry;

var _TreeEntry_toObject = _TreeEntry.prototype.toObject;
_TreeEntry.prototype.toObject = promisify(_TreeEntry_toObject);

var _Treebuilder = rawApi.Treebuilder;

var _Treebuilder_create = _Treebuilder.create;
_Treebuilder.create = promisify(_Treebuilder_create);

var _ConvenientPatch = rawApi.ConvenientPatch;
var _ConvenientPatch_hunks = _ConvenientPatch.prototype.hunks;
_ConvenientPatch.prototype.hunks = promisify(_ConvenientPatch_hunks);

var _ConvenientHunk = rawApi.ConvenientHunk;
var _ConvenientHunk_lines = _ConvenientHunk.prototype.lines;
_ConvenientHunk.prototype.lines = promisify(_ConvenientHunk_lines);

var _FilterRegistry = rawApi.FilterRegistry;
var _FilterRegistry_register = _FilterRegistry.register;
_FilterRegistry.register = promisify(_FilterRegistry_register);

var _FilterRegistry_unregister = _FilterRegistry.unregister;
_FilterRegistry.unregister = promisify(_FilterRegistry_unregister);

/* jshint ignore:end */

// Set the exports prototype to the raw API.
exports.__proto__ = rawApi;

var importExtension = function importExtension(name) {
  try {
    require("./" + name);
  } catch (unhandledException) {
    if (unhandledException.code != "MODULE_NOT_FOUND") {
      throw unhandledException;
    }
  }
};

// Load up utils
rawApi.Utils = {};
require("./utils/lookup_wrapper");
require("./utils/normalize_options");
require("./utils/shallow_clone");
require("./utils/normalize_fetch_options");

// Load up extra types;
require("./status_file");
require("./enums.js");

// Import extensions
// [Manual] extensions
importExtension("filter_registry");
importExtension("annotated_commit");
importExtension("attr");
importExtension("blame");
importExtension("blame_hunk");
importExtension("blame_options");
importExtension("blob");
importExtension("branch");
importExtension("branch_iterator");
importExtension("buf");
importExtension("cert");
importExtension("cert_hostkey");
importExtension("cert_x509");
importExtension("checkout");
importExtension("checkout_options");
importExtension("cherrypick");
importExtension("cherrypick_options");
importExtension("clone");
importExtension("clone_options");
importExtension("commit");
importExtension("config");
importExtension("config_entry");
importExtension("config_entry");
importExtension("cred");
importExtension("cred_default");
importExtension("cred_username");
importExtension("cred_userpass_payload");
importExtension("cvar_map");
importExtension("describe_format_options");
importExtension("describe_options");
importExtension("describe_result");
importExtension("diff");
importExtension("diff_binary");
importExtension("diff_binary_file");
importExtension("diff_delta");
importExtension("diff_file");
importExtension("diff_find_options");
importExtension("diff_hunk");
importExtension("diff_line");
importExtension("diff_options");
importExtension("diff_perfdata");
importExtension("diff_perfdata");
importExtension("diff_stats");
importExtension("error");
importExtension("fetch");
importExtension("fetch_options");
importExtension("fetch_options");
importExtension("filter");
importExtension("filter");
importExtension("filter_list");
importExtension("filter_source");
importExtension("giterr");
importExtension("graph");
importExtension("hashsig");
importExtension("ignore");
importExtension("index");
importExtension("index_conflict_iterator");
importExtension("index_entry");
importExtension("index_time");
importExtension("indexer");
importExtension("libgit2");
importExtension("mempack");
importExtension("merge");
importExtension("merge_driver_source");
importExtension("merge_file_input");
importExtension("merge_file_options");
importExtension("merge_file_result");
importExtension("merge_options");
importExtension("merge_result");
importExtension("message");
importExtension("note");
importExtension("note_iterator");
importExtension("object");
importExtension("odb");
importExtension("odb_expand_id");
importExtension("odb_object");
importExtension("oid");
importExtension("oid_shorten");
importExtension("oidarray");
importExtension("openssl");
importExtension("packbuilder");
importExtension("patch");
importExtension("pathspec");
importExtension("pathspec_match_list");
importExtension("proxy");
importExtension("proxy_options");
importExtension("push");
importExtension("push_options");
importExtension("push_update");
importExtension("rebase");
importExtension("rebase_operation");
importExtension("rebase_options");
importExtension("refdb");
importExtension("reference");
importExtension("reflog");
importExtension("reflog_entry");
importExtension("refspec");
importExtension("remote");
importExtension("remote_callbacks");
importExtension("remote_callbacks");
importExtension("remote_head");
importExtension("remote_head");
importExtension("repository");
importExtension("repository_init_options");
importExtension("reset");
importExtension("revert");
importExtension("revert_options");
importExtension("revparse");
importExtension("revwalk");
importExtension("signature");
importExtension("smart");
importExtension("stash");
importExtension("stash_apply_options");
importExtension("status");
importExtension("status_entry");
importExtension("status_list");
importExtension("status_options");
importExtension("strarray");
importExtension("submodule");
importExtension("submodule_update_options");
importExtension("tag");
importExtension("time");
importExtension("trace");
importExtension("transaction");
importExtension("transfer_progress");
importExtension("transport");
importExtension("tree");
importExtension("tree_entry");
importExtension("tree_update");
importExtension("treebuilder");
importExtension("writestream");
/* jshint ignore:start */

// Inherit directly from the original Cherrypick object.
_Cherrypick.cherrypick.__proto__ = _Cherrypick;

// Ensure we're using the correct prototype.
_Cherrypick.cherrypick.prototype = _Cherrypick.prototype;

// Assign the function as the root
rawApi.Cherrypick = _Cherrypick.cherrypick;

// Inherit directly from the original Clone object.
_Clone.clone.__proto__ = _Clone;

// Ensure we're using the correct prototype.
_Clone.clone.prototype = _Clone.prototype;

// Assign the function as the root
rawApi.Clone = _Clone.clone;

// Inherit directly from the original Merge object.
_Merge.merge.__proto__ = _Merge;

// Ensure we're using the correct prototype.
_Merge.merge.prototype = _Merge.prototype;

// Assign the function as the root
rawApi.Merge = _Merge.merge;

// Inherit directly from the original Reset object.
_Reset.reset.__proto__ = _Reset;

// Ensure we're using the correct prototype.
_Reset.reset.prototype = _Reset.prototype;

// Assign the function as the root
rawApi.Reset = _Reset.reset;

// Inherit directly from the original Revert object.
_Revert.revert.__proto__ = _Revert;

// Ensure we're using the correct prototype.
_Revert.revert.prototype = _Revert.prototype;

// Assign the function as the root
rawApi.Revert = _Revert.revert;

/* jshint ignore:end */

// Wrap asynchronous methods to return promises.
promisify(exports);

// Set version.
exports.version = require("../package").version;

// Expose Promise implementation.
exports.Promise = Promise;